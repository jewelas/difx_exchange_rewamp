import clsx from "clsx";
import { useState } from "react";
import Wrapper from "./style";

export interface SwitchProps {
  tabs: Array<{ value: string, label: string }>;
  defaultTab?: string;
  onChange: (value: string) => void;
}

export function Switch({defaultTab,  tabs, onChange }: SwitchProps) {

  const [currentTab, setCurrentTab] = useState(defaultTab || tabs[0].value);
  const onSwitch = (value:string)=>{
    setCurrentTab(value);
    onChange(value);
  }

  return (
    <Wrapper>
      {
        tabs.map(e=>
          <div key={`tab_${e}`} onClick={()=>{onSwitch(e.value)}} className={clsx("switch-item", currentTab===e.value?"active":"")}>{e.label}</div>
        )
      }
    </Wrapper>
  )
}