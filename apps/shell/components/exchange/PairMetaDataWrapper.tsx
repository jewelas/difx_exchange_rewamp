import { Icon, Loading, Typography } from "@difx/core-ui";
import {
  PairType,
  SocketEvent,
  useHttpGet,
  useSocket,
  useSocketProps,
} from "@difx/shared";
import sortBy from "lodash/sortBy";
import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  getAveragePrice,
  getPriceFormatted,
  getPricePercentChange,
  getTrendPrice,
} from "./../../utils/priceUtils";
import { PairMetadataStyled } from "./styled";
import { API_ENDPOINT, QUERY_KEY } from "./../../constants";

/* eslint-disable-next-line */
export interface PairMetaDataWrapperProps {
  pairInfo?: PairType;
}

export function PairMetaDataWrapper(props: PairMetaDataWrapperProps) {
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: 10000 });
  const router = useRouter();
  const { pair } = router.query;

  let pairInfo = null;
  if (pairs) {
    pairInfo = pairs.find((e) => e.symbol === pair);
  }

  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: { ...PairMetaDataWrapper.previousPair },
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);
  PairMetaDataWrapper.previousPair = pairInfo && pairInfo.symbol;

  const { currentPrice, priceTrend, highPrice, lowPrice, changed, precision } =
    useMemo(() => {
      if (data && data.bids && data.asks) {
        const { bids: _bids, asks: _asks } = data;
        const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
        const newPrice = getAveragePrice(
          reverseAsks[reverseAsks.length - 1][0],
          _bids[0][0],
          pairInfo.group_precision
        );
        const priceTrend = getTrendPrice(PairMetaDataWrapper.previousPrice, newPrice);

        const highPrice = pairInfo.high.toFixed(pairInfo.group_precision);
        const lowPrice = pairInfo.low.toFixed(pairInfo.group_precision);
        const changed = getPricePercentChange(pairInfo.last, pairInfo.open);

        PairMetaDataWrapper.previousPrice = newPrice;
        return {
          currentPrice: newPrice,
          priceTrend,
          highPrice,
          lowPrice,
          changed,
          precision: pairInfo.group_precision,
        };
      } else {
        return {
          currentPrice: 0.0,
          priceTrend: null,
          highPrice: 0.0,
          lowPrice: 0.0,
          changed: 0,
          precision: 2,
        };
      }
    }, [data, pairInfo]);

  if (!pairInfo) return <Loading />;

  return (
    <PairMetadataStyled>
      <div className="left">
        <Typography level="H6">{`${pairInfo.currency1}/${pairInfo.currency2}`}</Typography>
        {/* <Icon.FavoriteIcon useDarkMode /> */}{" "}
        {/* TODO: will be handled when completed List Favorite Pair Component */}
      </div>
      <div className="center">
        <div className="price">
          <Typography
            level="B2"
            color={
              priceTrend === "ask"
                ? "danger"
                : priceTrend === "bid"
                  ? "success"
                  : null
            }
          >{`${currentPrice}`}</Typography>
          <Typography level="B3">{`$${getPriceFormatted(
            currentPrice,
            precision
          )}`}</Typography>
        </div>
        <div className="price">
          <Typography level="B3">24h Change</Typography>
          <Typography
            level="B2"
            color={changed > 0 ? "success" : changed < 0 ? "danger" : null}
          >{`${changed.toFixed(2)}%`}</Typography>
        </div>
        <div className="price">
          <Typography level="B3">24h High</Typography>
          <Typography level="B2">{highPrice}</Typography>
        </div>
        <div className="price">
          <Typography level="B3">24h Low</Typography>
          <Typography level="B2">{lowPrice}</Typography>
        </div>
        <div className="price">
          <Typography level="B3">{`24h Volume(${pairInfo.currency1})`}</Typography>
          <Typography level="B2">34534.28</Typography>
        </div>
      </div>
      <div className="right">
        <div>
          <Icon.QuestionIcon useDarkMode />
        </div>
      </div>
    </PairMetadataStyled>
  );
}

PairMetaDataWrapper.previousPrice = 0.0;
PairMetaDataWrapper.previousPair = null;
export default PairMetaDataWrapper;
