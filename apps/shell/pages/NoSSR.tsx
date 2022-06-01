import dynamic from 'next/dynamic'
import React from 'react'

const NoSSR = props => (
  <React.Fragment>{props.children}</React.Fragment>
)

const SSR_PATHS = ['/','/home', '/market', '/login', '/register']
export function isSSRPage(path:string){
  for(const ssrPath of SSR_PATHS){
    if(path.includes(ssrPath)) return true;
  }
  return false;
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false
})