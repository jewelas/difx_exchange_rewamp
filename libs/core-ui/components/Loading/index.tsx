/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Skeleton from 'react-loading-skeleton';
import { MainStyled } from './styled';
import 'react-loading-skeleton/dist/skeleton.css';
import { CSSProperties } from "react";
interface LoadingProps {
  type?: 'icon' | 'skeleton',
  row?: number;
  column?: number;
  flexGrowForColumns?: number[];
  style?: CSSProperties;
  className?: string;
  hideColumns?: number[];
}
export function Loading({ type = 'icon', row = 1, column = 1, flexGrowForColumns = [], hideColumns = [], style, className }: LoadingProps) {

  if (type === 'icon') {
    return (
      <Spin
        style={{ display: "flex", marginTop: 20, justifyContent: "center", position: "absolute", width: "100%" }}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    )
  }

  const renderLoading = () => {
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

  return (
    <MainStyled style={style} className={className}>
      {renderLoading()}
    </MainStyled>
  )

}

export default Loading;
