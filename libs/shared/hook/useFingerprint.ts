import { useEffect, useRef } from 'react';

export function useFingerprint() {
  const clientRef = useRef()
  
  useEffect(()=>{
    if(navigator){
      const {ClientJS} = require('clientjs')
      clientRef.current = new ClientJS()
    }
  },[])

  const getFingerprint = () => {
    return new Promise((resolve,reject)=>{
      try{
        // @ts-ignore
        const print = clientRef.current.getFingerprint()
        resolve (print.toString())
      }catch(err){
        reject(err)
      }
    })
  }


  return {getFingerprint}
}