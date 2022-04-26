import { AxiosError, AxiosResponse } from "axios";
import { useQuery, useMutation } from "react-query";
import { axiosInstance as instance } from "./../api/index";

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
    const query = useQuery<Response, AxiosError>(
        queryKey,
        async () => {
            const res = await instance.get<null, AxiosResponse<Response>>(endpoint, request);
            const data: Response = res.data;

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
    const mutation = useMutation(
        (request: Request) => {
            return instance.get<Request, AxiosResponse<Response>>(endpoint, request)
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}

export function useHttpPost<Request, Response>({ onSuccess, onError, endpoint }: EventProps<Response>) {
    const mutation = useMutation(
        (request: Request) => {
            return instance.post<Request, AxiosResponse<Response>>(
                endpoint,
                request
            );
        },
        {
            onSuccess: (response: AxiosResponse<Response>) => {
                onSuccess && onSuccess(response);
            },
            onError: (error: AxiosError) => {
                onError && onError(error as AxiosError);
            },
        }
    );
    return mutation;
}