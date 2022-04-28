import { Icon, Loading, Typography } from "@difx/core-ui";
import { useEffect, useRef, useState } from 'react';
import {
  PairType, useHttpGet, useLocalStorage
} from "@difx/shared";
import { Input, Table } from "antd";
import { API_ENDPOINT, FETCHING, QUERY_KEY, STORE_KEY } from "../../constants";
import { getPriceFormatted, getPricePercentChange } from "./../../utils/priceUtils";
import { ListPairStyled } from "./styled";

export function ListPairWrapper() {
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: FETCHING.REFETCH_INTERVAL });

  const [tab, setTab] = useState<'favorite' | 'all'>('all');

  const componentRef = useRef(null);

  const {value: pairsStored, setValue: setPairsStore} = useLocalStorage(STORE_KEY.FAVORITE_PAIRS, []);

  const addToFavorite = (pair: string) => {
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (!_pairs.includes(pair)) {
      _pairs.push(pair)
      setPairsStore(_pairs);
    }
  }

  const removeFromFavorite = (pair: string)=>{
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (_pairs.includes(pair)) {
      const pairsFiltered = _pairs.filter(e=>e!==pair);
      setPairsStore(pairsFiltered);
    }
  }

  const columns = [
    {
      title: 'Pair',
      dataIndex: 'pair',
      sorter: {
        compare: (a, b) => a.pair - b.pair,
        multiple: 3,
      },
      render: (text, record, index) => {
        return (
          <div className="pair" key={`${record.key}_${record.pair}`}>
            <div
              className={pairsStored.includes(record.pair) ? 'added' : ''}
              onClick={() => { !pairsStored.includes(record.pair) ? addToFavorite(record.pair) : removeFromFavorite(record.pair) }}>
              <Icon.FavoriteIcon useDarkMode />
            </div>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 2,
      },
      render: (text, record) => {
        return (
          <Typography level="B3" color={record.trend === 'up' ? 'success' : 'danger'}>{text}</Typography>
        )
      }
    },
    {
      title: 'Change',
      dataIndex: 'change',
      sorter: {
        compare: (a, b) => a.change - b.change,
        multiple: 1,
      },
      render: (text, record) => {
        return (
          <Typography level="B3" color={record.trend === 'up' ? 'success' : 'danger'}>{text}</Typography>
        )
      }
    },
  ];


  if (!pairs) return <Loading />;

  const allDataPairs = pairs.map((pair: PairType) => {
    const percentPriceChange = getPricePercentChange(pair.last, pair.open);
    const trend: 'up' | 'down' = percentPriceChange < 0 ? 'down' : 'up';

    return {
      key: pair.symbol,
      pair: `${pair.currency1}/${pair.currency2}`,
      price: getPriceFormatted(pair.last, pair.group_precision),
      change: `${percentPriceChange < 0 ? '' : '+'}${percentPriceChange.toFixed(2)}%`,
      trend
    }
  });

  let favoriteDataPairs = [];
  if(pairsStored){
    favoriteDataPairs = allDataPairs.filter(e=>pairsStored.includes(e.pair));
  }
  

  return (
    <ListPairStyled ref={componentRef}>
      <Input placeholder="Search" />
      <div className="table-group">
        <div className="head">
          <div onClick={()=>{setTab('favorite')}} className={tab}><Icon.FavoriteIcon useDarkMode /></div>
          <div onClick={()=>{setTab('all')}} className={tab}><Typography level='B2'>All</Typography></div>
        </div>
        <div className="content">
          <Table scroll={{ x: "max-content", y: 270 }} pagination={false} columns={columns} dataSource={tab==='all' ? allDataPairs : favoriteDataPairs} onChange={() => { console.log('ssss') }} />
        </div>
      </div>
    </ListPairStyled>
  );
}

export default ListPairWrapper;
