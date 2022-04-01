import styled from 'styled-components';
import 'antd/dist/antd.css';
import Trend from 'react-trend';
import colors from '../Color'
import { Table, Tag, Space } from 'antd';

import { PairType } from '../../../../shared/type/Pair';

/* eslint-disable-next-line */
export interface PairTableProps {
  pairs: PairType[]
}

const StyledTable = styled(Table)`
`
export function PairTable(props: PairTableProps) {

  const { pairs } = props;

  const columns = [
    { title: 'Coin', dataIndex: 'symbol', key: 'symbol' },
    { title: 'Last Price', dataIndex: 'last', key: 'last' },
    {
      title: '24h Change', key: 'open', render: (text: string, record: any) => {
        const changed = (((record.last / record.open) * 100) - 100);
        if (changed >= 0) return <span style={{ color: colors.green.success }}>{changed.toFixed(2)}%</span>;
        else return <span style={{ color: colors.red.failure }}>{changed.toFixed(2)}%</span>;
      }
    },
    { title: '24h Volume', dataIndex: 'volume', key: 'volume' },
    {
      title: 'Chart', key: 'pricing', width: 180, render: (text: string, record: any) => {
        const changed = (((record.last / record.open) * 100) - 100);
        return <Trend smooth data={record.pricing} strokeWidth={3} autoDraw
          autoDrawDuration={3000} gradient={[changed >= 0 ? (colors.green.success || '#000') : (colors.red.failure || '#000')]} />
      }
    },
    { title: 'Action', dataIndex: 'action', key: 'action' },
  ];

  return (
    <StyledTable dataSource={pairs} columns={columns} />
  );
}

export default PairTable;
