import { SearchOutlined } from '@ant-design/icons';
import { Icon, Loading, Typography } from "@difx/core-ui";
import {
  PairType, useHttpGet, useLocalStorage
} from "@difx/shared";
import { Input, Table } from "antd";
import { useMemo, useRef, useState } from 'react';
import { API_ENDPOINT, FETCHING, QUERY_KEY, STORE_KEY } from "@difx/constants";
import { getPriceFormatted, getPricePercentChange } from "./../../utils/priceUtils";
import { TableWraperStyled } from "./styled";

export function ListPairWrapper() {
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: FETCHING.REFETCH_INTERVAL });

  const [tab, setTab] = useState<'favorite' | 'all'>('all');
  const [searchValue, setSearchValue] = useState("");
  const [typeChange, setTypeChange] = useState<'percent' | 'volume'>('percent')

  const componentRef = useRef(null);

  const { value: pairsStored, setValue: setPairsStore } = useLocalStorage(STORE_KEY.FAVORITE_PAIRS, []);

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
            <div
              onClick={() => { setTypeChange(typeChange === 'percent' ? 'volume' : 'percent') }}>
              <Icon.SwitchIcon useDarkMode />
            </div>
            {typeChange === 'percent' ? 'Change' : 'Volume'}
          </div>
        )
      },
      dataIndex: 'change',
      sorter: {
        compare: (a, b) => a.change - b.change,
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



  const allDataPairs = useMemo(() => {
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
            key: pair.symbol,
            pair: `${pair.currency1}/${pair.currency2}`,
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

  const favoriteDataPairs = useMemo(() => {
    if (allDataPairs) {
      return allDataPairs.filter(e => pairsStored.includes(e.pair));
    } else return null;
  }, [pairsStored, allDataPairs]);

  if (!pairs) return <Loading />;

  return (
    <TableWraperStyled ref={componentRef}>
      <Input onKeyUp={onSearch} placeholder="Search" prefix={<SearchOutlined />} />
      <div className="table-group">
        <div className="head">
          <div onClick={() => { setTab('favorite') }} className={tab}><Icon.FavoriteIcon useDarkMode /></div>
          <div onClick={() => { setTab('all') }} className={tab}><Typography level='B2'>All</Typography></div>
        </div>
        <div className="content">
          <Table
            showSorterTooltip={false}
            scroll={{ x: "max-content", y: 270 }}
            pagination={false}
            columns={columns}
            dataSource={tab === 'all' ? allDataPairs : favoriteDataPairs}
          />
        </div>
      </div>
    </TableWraperStyled>
  );
}

export default ListPairWrapper;
