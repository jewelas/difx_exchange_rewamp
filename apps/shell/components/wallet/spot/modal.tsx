import { Button, Col, Row, Table } from "antd";
import React, { useState } from "react";
import type { ColumnsType } from 'antd/lib/table';
import { ConvertModal } from "../styled";

interface DataType {
  key: React.Key;
  coin: string;
  balances: number;
  value: number;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Coin',
    dataIndex: 'coin',
  },
  {
    title: 'Available Balance',
    dataIndex: 'balances',
  },
  {
    title: 'Approx.DIFX Value',
    dataIndex: 'value',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    coin: `Edward King ${i}`,
    balances: 32.00,
    value: 232,
  });
}

export function ConvertSmallBalModal() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // const hasSelected = selectedRowKeys.length > 0;

  return (
    <ConvertModal>
       <Table
       rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={{ position: ['bottomCenter'], defaultPageSize: 5 }}
      className="common-table modal-table"
      size="small"
      />
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {`Selected ${selectedRowKeys.length} items`}
        </span>
      </div>
      <div className="modal-footer">
        <Row align="middle" justify="space-between">
          <Col>
            <div className="convert-total">
              <label>You will get</label>
              <div> 12 DIFX <span>Fee : 2 DIFX ( 2% fee rate )</span></div>
            </div>
          </Col>
          <Col>
            <Button type="primary">Convert</Button>
          </Col>
        </Row>
      </div>
    </ConvertModal>
  );
}

export default ConvertSmallBalModal;
