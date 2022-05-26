import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useQuery, useMutation } from "react-query";
import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { useAuth, useGuestAuth } from '..'
import { showError, showInfo, showWarning } from "../../core-ui/components"

function onErrorHandle( error: AxiosError, refreshToken: () => void, refreshAnonymousToken: () => void, logOut: () => void) {
    const { response } = error;
    const { statusCode } = response?.data;

    // @ts-ignore
    switch (statusCode) {
        case 401:
            refreshToken()
            break;
        case 403:
            logOut();
            showError("Login Again", response?.data.message)
            break;
        // case 407:
        //     refreshAnonymousToken()
        //     break;
        case 406:
            refreshAnonymousToken()
            showWarning("Oops", "Something went wrong, try again")
            break
        case 410:
            showInfo("Verify IP", response?.data.message)
            break
        case 411:
            showInfo("Verify 2FA Code", response?.data.message)
            break
        default:
            showError("Oops", response?.data.message)
            break
    }
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

    const { refreshToken, logOut } = useAuth();
    const { refreshAnonymousToken } = useGuestAuth();

    const defaultOption = {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    };
    const mergeOptions = {
        ...defaultOption,
        ...options
    }

    instance.interceptors.request.use(axiosAuthorization);

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        const { response } = error;
        const { statusCode } = response?.data;
        if(statusCode === 407){
            refreshAnonymousToken()
            return instance.request(error.config)
        }else{
            return Promise.reject(error)
        }
    })
    
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
                onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut );
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

    const { refreshToken, logOut } = useAuth();
    const { refreshAnonymousToken } = useGuestAuth();

    instance.interceptors.request.use(axiosAuthorization)

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        const { response } = error;
        const { statusCode } = response?.data;
        if(statusCode === 407){
            refreshAnonymousToken()
            return instance.request(error.config)
        }else{
            return Promise.reject(error)
        }
    })

    const mutation = useMutation(
        (request: any) => {
            return instance.get<Request, AxiosResponse<Response>>((request && request.endpoint) ? request.endpoint : endpoint, request)
        },
        {
            onSuccess: (response: AxiosResponse) => {
                onSuccess && onSuccess(response.data);
            },
            onError: (error: AxiosError) => {
                onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPost<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    const { refreshToken, logOut } = useAuth()
    const { refreshAnonymousToken } = useGuestAuth()

    instance.interceptors.request.use(axiosAuthorization)

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        const { response } = error;
        const { statusCode } = response?.data;
        if(statusCode === 407){
            refreshAnonymousToken()
            return instance.request(error.config)
        }else{
            return Promise.reject(error)
        }
    })

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
                onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPut<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    const { refreshToken, logOut } = useAuth()
    const { refreshAnonymousToken } = useGuestAuth()

    instance.interceptors.request.use(axiosAuthorization)

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
                onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpDelete<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    const { refreshToken, logOut } = useAuth()
    const { refreshAnonymousToken } = useGuestAuth()

    instance.interceptors.request.use(axiosAuthorization)

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        const { response } = error;
        const { statusCode } = response?.data;
        if(statusCode === 407){
            refreshAnonymousToken()
            return instance.request(error.config)
        }else{
            return Promise.reject(error)
        }
    })

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
                onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut);
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useAPI() {

    const { refreshToken, logOut } = useAuth()
    const { refreshAnonymousToken } = useGuestAuth()

    instance.interceptors.request.use(axiosAuthorization)

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        onErrorHandle(error, refreshToken, refreshAnonymousToken, logOut);
        return error.response
    })

    return { API: instance }
}