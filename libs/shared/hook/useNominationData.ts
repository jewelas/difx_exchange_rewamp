import { API_ENDPOINT } from "../constants"
import { useAPI } from "./useHttp"

export function useNominationData() {
    const { API } = useAPI();

    const getNominationList = async () => {
        const response = await API.get(API_ENDPOINT.GET_NOMINATION_LIST);
        return response;
    }

    const getNominationRequest = async () => {
        const response = await API.get(API_ENDPOINT.GET_NOMINATION_REQUEST);
        return response;
    }

    const createNomination = async (name: string, email: string, relationship: string, percentage: number) => {
        const response = await API.post(API_ENDPOINT.CREATE_NOMINATION, { name, email, relationship, percentage });
        return response;
    }

    const removeNomination = async (removeId: number) => {
        const response = await API.delete(API_ENDPOINT.REMOVE_NOMINATION_LIST, {
            data: {id: removeId}
        });
        return response;
    }

    const updateStatus = async (requestId: number, status:string) => {
        const response = await API.put(API_ENDPOINT.UPDATE_NOMINATION_STATUS, { status, id: requestId});
        return response;
    }

    const claimNomination = async (id:number) => {
        const response = await API.post(API_ENDPOINT.NOMINATION_CLAIM, { 
            comment: "i need to claim this account",
            id
        });
        return response;
    }

    return {
        getNominationList,
        createNomination,
        removeNomination,
        getNominationRequest,
        updateStatus,
        claimNomination
    }
}