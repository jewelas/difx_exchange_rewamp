import { TokenSwitchWrapper } from "./styled";
import { Divider, Space, Switch } from "antd";
import t from "../../../locale"
import { Typography } from "./../Typography";
import { useAtomValue } from "jotai";
import { API_ENDPOINT, currentUserAtom, useAPI, useAuth } from "../../../shared";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export const TokenConvertSwitch = () => {
  const currentUser = useAtomValue(currentUserAtom)
  const [useBonus, setUseBonus] = useState(false)
  const [useTokens, setUseTokens] = useState(false)
  const { updateProfile } = useAuth()

  const { API } = useAPI()
  
  const handleUseBonus = async() => {
    try{
      const reqData = {
        id: currentUser?.id,
        usebonus: !useBonus,
      }
      const response = await API.put(API_ENDPOINT.UPDATE_USER_PROFILE,reqData)
      // eslint-disable-next-line
      const { data: userData, statusCode } = response?.data
      if(statusCode === 200){
        updateProfile(userData)
      }
    }catch(error){
      console.log(error)
    }
  }

  const handleUseTokens = async() => {
    try{
      const reqData = {
        id: currentUser?.id,
        usetokens: !useTokens,
      }
      const response = await API.put(API_ENDPOINT.UPDATE_USER_PROFILE,reqData)
      // eslint-disable-next-line
      const { data: userData, statusCode } = response?.data
      if(statusCode === 200){
        updateProfile(userData)
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(currentUser){
      setUseBonus(currentUser.usebonus)
      setUseTokens(currentUser.usetokens)
      console.log(currentUser)
    }
  },[currentUser])

  if(!currentUser){
    return (
      <Loading />
    )
  }

  return (
      <TokenSwitchWrapper>
        <Space split={<Divider type="vertical" />}>
            <div>
                <Switch checked={useBonus} onChange={handleUseBonus}/>
                <Typography level="B1">{t("wallet.use_difx_token")}</Typography>
            </div>
            <div>
                <Switch checked={useTokens} onChange={handleUseTokens}/>
                <Typography level="B1"> {t("wallet.use_difx_point")}</Typography>
            </div>
        </Space>
      </TokenSwitchWrapper>
  );
};
