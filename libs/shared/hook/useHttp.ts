import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useQuery, useMutation } from "react-query";
import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { notification } from 'antd';
import { useAuth, useGuestAuth } from '..'

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
        refetchOnWindowFocus: false
    };
    const mergeOptions = {
        ...defaultOption,
        ... options
    }

    instance.interceptors.request.use(axiosAuthorization);

    const query = useQuery<Response, AxiosError>(
        queryKey,
        async () => {
            const res = await instance.get<null, AxiosResponse>(endpoint, request);
            const data =  res.data.data;

            if (data) {
                return data;
            }
            throw new Error("no-data");
        },
        mergeOptions
    );
    return query;
}

interface EventProps<Response> {
    onSuccess?: (response: AxiosResponse<Response>) => void;
    onError?: (error: AxiosError) => void;
    endpoint: string
}

export function useHttpGetByEvent<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {
    instance.interceptors.request.use(axiosAuthorization)

    const mutation = useMutation(
        (request: Request) => {
            return instance.get<Request, AxiosResponse<Response>>(endpoint, request)
        },
        {
            onSuccess: (response: AxiosResponse) => {
                onSuccess && onSuccess(response.data);
            },
            onError: (error: AxiosError) => {
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPost<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {

    const { refreshToken } = useAuth()
    const { refreshAnonymousToken } = useGuestAuth()

    instance.interceptors.request.use(axiosAuthorization)

    const mutation = useMutation(
        (request: any) => {
            return instance.post<Request, AxiosResponse<Response>>(
                request.endpoint || endpoint,
                request
            );
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                let { response } = error
                // @ts-ignore
                let { statusCode } =  response.data
                switch (statusCode) {
                    case 401:
                        refreshToken()
                        break
                    case 406:
                        refreshAnonymousToken()
                        notification.info({
                            message: "Oops",
                            description: "Something went wrong, try again",
                        });
                        break
                    case 410:
                        notification.info({
                            message: "Verify IP",
                            description: response?.data.message,
                        });
                        break
                    case 411:
                        notification.info({
                            message: "Verify 2FA Code",
                            description: response?.data.message,
                        });
                        break
                    default: 
                        notification.error({
                            message: "Oops",
                            description: response?.data.message,
                        });
                        break
                }
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}