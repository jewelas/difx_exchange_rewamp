import { useFingerprint } from "./useFingerprint";
import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { AxiosResponse } from "axios";
import { API_ENDPOINT } from "../constants";
import { anonymousTokenAtom, configAtom, currentUserAtom, isLoggedInAtom, permissionsAtom } from "../atom";
import { useAtom } from "jotai";
import { showError } from "../../core-ui/components";
import { useRouter } from "next/router";

export const useRefreshToken = () => {
  const [anonymousToken, setAnonymousToken] = useAtom(anonymousTokenAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);
  const [config, setConfig] = useAtom(configAtom);
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const { getFingerprint } = useFingerprint() 
  const router = useRouter();
  
  const refreshAnonymousToken = (): Promise<string> => {
    return new Promise(async(resolve, reject) => {
      try{
        const deviceFingerprint = await getFingerprint()
        const reqData = {
          identifier: deviceFingerprint,
          device_type: "web",
          push_token: "21321321312"
        }

        instance.interceptors.request.use(axiosAuthorization);

        const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.GET_ANONYMOUS_TOKEN,reqData)
        const { data } = response?.data
        let { anonymousToken, config, permission } = data
        localStorage?.setItem("anonymousToken", anonymousToken)
        localStorage?.setItem("permissions", JSON.stringify(permission))
        localStorage?.setItem("config", JSON.stringify(config))
        setPermissions(permission)
        setConfig(config);
        setAnonymousToken(anonymousToken)
        resolve(anonymousToken)
      }catch(error){
        reject(error)
      }
    })
    
  };
  
  const refreshSessionToken = (): Promise<string> => {
    return new Promise(async(resolve,reject)=>{
      try{
        let refreshToken = localStorage?.getItem("refreshToken")
        let currentUser = JSON.parse(localStorage?.getItem("currentUser") || "null")
    
        const reqData = {
          id: currentUser.id,
          refreshToken
        }
        
        instance.interceptors.request.use(axiosAuthorization)

        const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.REFRESH_TOKEN,reqData)
        const { data } = response.data
        let { accessToken, refreshToken: renewedRefreshToken } = data
        localStorage?.setItem("sessionToken", accessToken)
        localStorage?.setItem("refreshToken", renewedRefreshToken)
        resolve(accessToken)
      }catch(error){
        expireSession()
        reject(error)
      }
    })
  }

  const expireSession = () => {
    let currentUser = JSON.parse(localStorage?.getItem("currentUser") || "null")
    if(currentUser){
      router.push("/login")
      localStorage?.removeItem("currentUser")
      localStorage?.removeItem("sessionToken")
      localStorage?.removeItem("refreshToken")
      localStorage?.removeItem("permissions")
      localStorage?.removeItem("favoriteSpotPairs")
      localStorage?.removeItem("favoriteFuturePairs")
      setUser(undefined);
      setPermissions(undefined)
      setIsLoggedIn(false);
      showError("Session Expired", "Please Login Again")
    }
  }

  return { 
    refreshAnonymousToken,
    refreshSessionToken,
    expireSession ,
  }
  
}