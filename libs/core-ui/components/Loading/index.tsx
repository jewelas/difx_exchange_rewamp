/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Skeleton from 'react-loading-skeleton';
import { MainStyled } from './styled';
import 'react-loading-skeleton/dist/skeleton.css';
import { CSSProperties } from "react";
interface LoadingProps {
  type?: 'icon' | 'skeleton' | 'component',
  row?: number;
  column?: number;
  isLoading?: boolean;
  flexGrowForColumns?: number[];
  style?: CSSProperties;
  className?: string;
  hideColumns?: number[];
}
export function Loading({ children, isLoading = false, type = 'component', row = 1, column = 1, flexGrowForColumns = [], hideColumns = [], style, className }: React.PropsWithChildren<LoadingProps>) {

  const renderSkeleton = () => {
    const cols = [];
    for (let i = 0; i < column; i++) {
      cols.push(
        <div
          style={flexGrowForColumns.length > i && flexGrowForColumns[i] ? { flexGrow: flexGrowForColumns[i] } : {}}
          key={`loader_col_${i}_${type}_${Math.random()}`} className="col-loading">
          <div
            style={hideColumns.includes(i) ? { visibility: 'hidden' } : {}}
          >
            <Skeleton />
          </div>
        </div>
      )
    }

    const result = [];
    for (let i = 0; i < row; i++) {
      result.push(
        <div key={`loader_row_${i}_${type}_${Math.random()}`} className="row-loading">
          {cols}
        </div>
      )
    }
    return result;
  }

  const renderComponent = () => {
    const Comp = () => (
      <MainStyled style={style?style:{height:'100%', padding:'unset'}} className={className}>
        <Skeleton />
      </MainStyled>
    )
    if (children) {
      if (isLoading) return <Comp />
      else {
        return (children)
      }
    } else return <Comp />
  }

  if (type === 'icon') {
    return (
      <Spin
        style={{ display: "flex", marginTop: 20, justifyContent: "center", position: "absolute", width: "100%" }}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    )
  } else if (type === 'component') {
    return <>{renderComponent()}</>
  }

  return (
    <MainStyled style={style} className={className}>
      {renderSkeleton()}
    </MainStyled>
  )

}

export default Loading;
