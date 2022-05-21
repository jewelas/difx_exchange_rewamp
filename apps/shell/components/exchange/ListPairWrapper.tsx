/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
// import { API_ENDPOINT, QUERY_KEY, REFETCH, STORE_KEY } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import {
  PairType, useHttpGet, useLocalStorage, useSocketProps, useSocket, SocketEvent
} from "@difx/shared";
import { getPriceFormatted, getPricePercentChange } from "@difx/utils";
import { Input, Table, Button } from "antd";
import { useEffect, useMemo, useRef, useState } from 'react';
import { API_ENDPOINT, EXCHANGE_LAYOUT, QUERY_KEY, STORE_KEY } from "@difx/constants";
import { TableWraperStyled } from "./styled";
import clsx from 'clsx';
import { isEmpty } from 'lodash';

export function ListPairWrapper({ layout = 'default' }: { layout?: EXCHANGE_LAYOUT }) {
  const { data: resData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null/*{ refetchInterval: REFETCH._10SECS }*/);

  const param: useSocketProps = {
    event: SocketEvent.prices,
  };
  const pricesWSData = useSocket(param);

  const [tab, setTab] = useState('all');
  const [searchValue, setSearchValue] = useState("");
  const [pairs, setPairs] = useState<PairType[]>()
  const [typeChange, setTypeChange] = useState<'percent' | 'volume'>('percent')

  const router = useRouter();

  const componentRef = useRef(null);

  const { value: pairsStored, setValue: setPairsStore } = useLocalStorage(STORE_KEY.FAVORITE_PAIRS, []);


  useEffect(() => {
    if (resData) {
      setPairs(resData.spot)
    }
  }, [resData]);

  const addToFavorite = (pair: string) => {
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (!_pairs.includes(pair)) {
      _pairs.push(pair)
      setPairsStore(_pairs);
    }
  }

  const removeFromFavorite = (pair: string) => {
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (_pairs.includes(pair)) {
      const pairsFiltered = _pairs.filter(e => e !== pair);
      setPairsStore(pairsFiltered);
    }
  }

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const columns = [
    {
      title: 'Pair',
      dataIndex: 'pair',
      sorter: {
        compare: (a, b) => a.pair.localeCompare(b.pair),
        multiple: 3,
      },
      render: (text, record) => {
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
      title: () => {
        return (
          <div className='header-price'>Price</div>
        )
      },
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 2,
      },
      render: (text, record) => {
        return (
          <div className='price'>
            <Typography level="B3" color={record.trend === 'up' ? 'success' : 'danger'}>{text}</Typography>
          </div>
        )
      }
    },
    {
      title: () => {
        return (
          <div className="header-change">
            <Button ghost
              onClick={() => { setTypeChange(typeChange === 'percent' ? 'volume' : 'percent') }}>
              <Icon.SwitchIcon useDarkMode />
            </Button>
            {typeChange === 'percent' ? 'Change' : 'Volume'}
          </div>
        )
      },
      dataIndex: 'change',
      sorter: {
        compare: (a, b) => {
          let _a = typeChange === 'percent' ? a.change : a.volume;
          let _b = typeChange === 'percent' ? b.change : b.volume;
          const regex = /%|\+|-|,/gi;
          _a = _a.replace(regex, "");
          _b = _b.replace(regex, "");
          return Number(_a) - Number(_b);
        },
        multiple: 1,
      },
      render: (text, record) => {
        return (
          <div className='change'>
            <Typography
              level="B3"
              color={record.trend === 'up' ? 'success' : 'danger'}
            >
              {typeChange === 'percent' ? record.change : record.volume}
            </Typography>
          </div>
        )
      }
    },
  ];

  let allDataPairs = useMemo(() => {
    if (!pairs) return null;

    const result = [];

    for (const pair of pairs) {
      const percentPriceChange = getPricePercentChange(pair.last, pair.open);
      const trend: 'up' | 'down' = percentPriceChange < 0 ? 'down' : 'up';

      const searchValueUpper = searchValue.toUpperCase();
      const isVisible = !searchValueUpper || pair.currency1.includes(searchValueUpper) || pair.currency2.includes(searchValueUpper);
      if (isVisible) {
        result.push(
          {
            categories: pair.categories,
            key: pair.symbol,
            pair: `${pair.currency1}/${pair.currency2}`,
            group_precision: pair.group_precision,
            open: pair.open,
            price: getPriceFormatted(pair.last, pair.group_precision),
            change: `${percentPriceChange < 0 ? '' : '+'}${percentPriceChange.toFixed(2)}%`,
            volume: `${getPriceFormatted(pair.volume, 2)}`,
            trend,
          }
        )
      }
    }

    return result;

  }, [searchValue, pairs]);


  // Update data based from Socket
  allDataPairs = useMemo(() => {
    if (!allDataPairs) return null;

    if (!isEmpty(pricesWSData) && pricesWSData.length === 4) {
     const index=  allDataPairs.findIndex(e => e.key === pricesWSData[0]);
     allDataPairs[index].price = pricesWSData[1];
    const change = ((pricesWSData[1] - allDataPairs[index].open) / allDataPairs[index].open) * 100
     allDataPairs[index].change = `${change < 0 ? '' : '+'}${change.toFixed(2)}%`
    }
    return allDataPairs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pricesWSData]);


  const favoriteDataPairs = useMemo(() => {
    if (allDataPairs) {
      return allDataPairs.filter(e => pairsStored.includes(e.pair));
    } else return null;
  }, [pairsStored, allDataPairs]);

  const filterPairsByCategory = useMemo(() => {
    if (tab !== 'all' && tab !== 'favorite') {
      if (!allDataPairs) return [];
      return allDataPairs.filter(e => e.categories && e.categories.includes(tab))
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  if (!pairs) return <Loading type='component' />

  return (
    <TableWraperStyled ref={componentRef} style={layout === 'compact' ? { width: '500px' } : {}}>
      <Input onKeyUp={onSearch} placeholder="Search" prefix={<SearchOutlined />} />
      <div className="table-group">
        <div className="head">
          <div onClick={() => { setTab('favorite') }} className={tab}><Icon.FavoriteIcon useDarkMode /></div>
          <div onClick={() => { setTab('all') }} className={clsx('tab', tab)}><Typography level='B2'>All</Typography></div>
          {
            resData.categories && resData.categories.map(e =>
              <div key={`tab_${e}`} onClick={() => { setTab(e) }} className={clsx('tab', tab === e ? 'active' : '')}><Typography level='B2'>{e}</Typography></div>
            )
          }
        </div>
        <div className="content">
          <Table
            showSorterTooltip={false}
            scroll={{ x: "max-content", y: 270 }}
            pagination={false}
            columns={columns}
            dataSource={
              tab === 'all' ? allDataPairs :
                tab === 'favorite' ? favoriteDataPairs :
                  filterPairsByCategory
            }
            onRow={(record, rowIndex) => {
              return {
                onClick: (e: any) => { e.target.innerHTML && router.push(`/exchange/${record.key}`) }
              };
            }}
          />
        </div>
      </div>
    </TableWraperStyled>
  );
}

export default ListPairWrapper;
