import clsx from "clsx";
import { useState } from "react";
import Wrapper from "./styled";

export interface SwitchProps {
  tabs: Array<{ value: string, label: string }>;
  defaultTab?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function Switch({defaultTab,  tabs, onChange, disabled }: SwitchProps) {

  const [currentTab, setCurrentTab] = useState(defaultTab || tabs[0].value);
  const onSwitch = (value:string)=>{
    if(disabled) return;
    setCurrentTab(value);
    onChange(value);
  }

  return (
    <Wrapper style={disabled?{opacity:0.7, cursor:'not-allowed'}:{}}>
      {
        tabs.map(e=>
          <div key={`tab_${e.value}`} onClick={()=>{onSwitch(e.value)}} className={clsx("switch-item", currentTab===e.value?"active":"")}>{e.label}</div>
        )
      }
    </Wrapper>
  )
}

export default Switch