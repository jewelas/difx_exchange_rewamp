import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useQuery, useMutation } from "react-query";
import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { useAuth, useGuestAuth } from '..'
import { showError, showInfo, showWarning } from "../../core-ui/components"
import { useRefreshToken } from "./useRefreshToken";

function onErrorHandle( error: AxiosError) {
    const { response } = error;
    const { statusCode } = response?.data;

    // @ts-ignore
    switch (statusCode) {
        case 410:
            showInfo("Verify IP", response?.data.message)
            return
        case 411:
            showInfo("Verify 2FA Code", response?.data.message)
            return
        case 415:
            showInfo("Verify Account", response?.data.message)
            return
        default:
            showError("Oops", response?.data.message)
            return
    }
}

let isAnonymousTokenRefreshing = false;
let anonymousTokenRefreshSubscribers: any[] = [];
let isSessionTokenRefreshing = false;
let sessionTokenRefreshSubscribers: any[] = [];

const subscribeAnonymousTokenRefresh = (cb: any) => {
    anonymousTokenRefreshSubscribers.push(cb);
  }
  
const onAnonymousTokenRrefreshed = (token: any) => {
    anonymousTokenRefreshSubscribers.map(cb => cb(token));
}

const subscribeSessionTokenRefresh = (cb: any) => {
    sessionTokenRefreshSubscribers.push(cb);
  }
  
const onSessionTokenRrefreshed = (token: any) => {
    sessionTokenRefreshSubscribers.map(cb => cb(token));
}

const interceptorHandler = (type: any) => {
    instance.interceptors.request.use(axiosAuthorization);
    const { refreshAnonymousToken, refreshSessionToken, expireSession } = useRefreshToken()

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        const { config, response: { data } } = error
        const { statusCode } = data
        const originalRequest = config;

        if (statusCode === 406) {
            if (!isAnonymousTokenRefreshing) {
              isAnonymousTokenRefreshing = true;
              refreshAnonymousToken()
                .then(newToken => {
                    isAnonymousTokenRefreshing = false;
                    onAnonymousTokenRrefreshed(newToken);
                });
            }
        
            const retryOrigReq = new Promise((resolve, reject) => {
                subscribeAnonymousTokenRefresh((token: string) => {
                    // replace the expired token and retry
                    originalRequest.headers["x-access-token"] =  token ? token : "";
                    resolve(axios(originalRequest));
                });
            });
            return retryOrigReq;
        } else if(statusCode === 401) {
            if (!isSessionTokenRefreshing) {
                isSessionTokenRefreshing = true;
                refreshSessionToken()
                  .then(newToken => {
                      isSessionTokenRefreshing = false;
                      onSessionTokenRrefreshed(newToken);
                  });
              }
          
              const retryOrigReq = new Promise((resolve, reject) => {
                    subscribeSessionTokenRefresh((token: string) => {
                      // replace the expired token and retry
                      originalRequest.headers["Authorization"] =  token ? token : "";
                      resolve(axios(originalRequest));
                  });
              });
              return retryOrigReq;
        } else if(statusCode === 403) {
            expireSession()
            return
        } else {
            if(type === "base"){
                onErrorHandle(error)
                return error.response
            }else if(type === 'withQuery'){
                return Promise.reject(error);
            }
        }
    })
}

/**
 * 
 * @param queryKey : this key for caching, in the future you can use  useQuery('[queryKey]', ...) to get caching data
 * @param endpoint : the API endpont
 * @param options  : define options to refech or caching here, ref: https://react-query.tanstack.com/reference/useQuery
 * @param request  : request params
 * @returns 
 */
export function useHttpGet<Request, Response>(queryKey: string, endpoint: string, options: {}, request?: Request) {

    const defaultOption = {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    };
    const mergeOptions = {
        ...defaultOption,
        ...options
    }

    instance.interceptors.request.use(axiosAuthorization);

    interceptorHandler('withQuery')
    
    const query = useQuery<Response, AxiosError>(
        queryKey,
        async () => {
            try {
                const res = await instance.get<null, AxiosResponse>(endpoint, request);
                const data = res.data.data;
                
                if (data) {
                    return data;
                }
            } catch (error: any) {
                // onErrorHandle(error, refreshToken, refreshAnonymousToken, expireSession );
            }
        },
        mergeOptions
    );
    return query
}

interface EventProps<Response> {
    onSuccess?: (response: AxiosResponse<Response>) => void;
    onError?: (error: AxiosError) => void;
    endpoint: string
}

export function useHttpGetByEvent<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    instance.interceptors.request.use(axiosAuthorization)

    interceptorHandler('withQuery')

    const mutation = useMutation(
        (request: any) => {
            return instance.get<Request, AxiosResponse<Response>>((request && request.endpoint) ? request.endpoint : endpoint, request)
        },
        {
            onSuccess: (response: AxiosResponse) => {
                onSuccess && onSuccess(response.data);
            },
            onError: (error: AxiosError) => {
                // onErrorHandle(error, refreshToken, refreshAnonymousToken, expireSession);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPost<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    instance.interceptors.request.use(axiosAuthorization)
    
    interceptorHandler('withQuery')

    const mutation = useMutation(
        (request: any) => {
            const data ={...request};
            delete data["endpoint"];
            return instance.post<Request, AxiosResponse<Response>>(
                (request && request.endpoint) ? request.endpoint : endpoint,
                data
            );
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                // onErrorHandle(error, refreshToken, refreshAnonymousToken, expireSession);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPut<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    instance.interceptors.request.use(axiosAuthorization)

    interceptorHandler('withQuery')

    const mutation = useMutation(
        (request: any) => {
            const data ={...request};
            delete data["endpoint"];
            return instance.put<Request, AxiosResponse<Response>>(
                (request && request.endpoint) ? request.endpoint : endpoint,
                data
            );
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                // onErrorHandle(error, refreshToken, refreshAnonymousToken, expireSession);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpDelete<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    instance.interceptors.request.use(axiosAuthorization)

    interceptorHandler('withQuery')

    const mutation = useMutation(
        (request: any) => {
            return instance.delete<Request, AxiosResponse<Response>>(
                request.endpoint || endpoint,
                { data: request }
            );
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                // onErrorHandle(error, refreshToken, refreshAnonymousToken, expireSession);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useAPI() {

    instance.interceptors.request.use(axiosAuthorization)

    interceptorHandler('base')

    return { API: instance }
}