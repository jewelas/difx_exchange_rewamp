import { PAIRS } from "../../../shared/constants/index"
// import { widget } from "./charting_library"

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export interface TradingViewChartInterface {
  pair:object
  symbol:string,
  containerId:string
  datafeedUrl:string
  libraryPath:string
  chartsStorageUrl:string
  chartsStorageApiVersion:string
  clientId:string
  userId:string
  fullscreen:boolean
  autosize:boolean
  studiesOverrides:object
  theme:string
  currentTimeframe: string
  isFullScreen: boolean
  candleType: string
  showIndicatorPanel: boolean
}

export default function TradingViewChart({
  pair,
  symbol,
  containerId,
  datafeedUrl,
  libraryPath,
  chartsStorageUrl,
  chartsStorageApiVersion,
  clientId,
  userId,
  fullscreen,
  autosize,
  studiesOverrides,
  theme,
  currentTimeframe,
  isFullScreen,
  candleType,
  showIndicatorPanel,
}: TradingViewChartInterface) {
  

  // const loadChart = (symbol) => {
  //   try{
  //     const widgetOptions = {
  //       symbol: symbol,
  //       // BEWARE: no trailing slash is expected in feed URL
  //       datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.datafeedUrl),
  //       interval: this.interval,
  //       container: this.containerId,
  //       theme: this.theme,
  //       library_path: this.libraryPath,
  //       locale: getLanguageFromURL() || 'en',
  //       enabled_features: ['seconds_resolution', 'timeframes_toolbar', 'header_interval_dialog_button', 'control_bar', 'header_indicators', 'border_around_the_chart'],
  //       charts_storage_url: this.chartsStorageUrl,
  //       charts_storage_api_version: this.chartsStorageApiVersion,
  //       client_id: this.clientId,
  //       user_id: this.userId,
  //       fullscreen: this.fullscreen,
  //       autosize: this.autosize,
  //       studies_overrides: this.studiesOverrides,
  //       custom_css_url: 'night.css',
  //       supported_resolutions: ["5", "15", "30", "60", "1D"],
  //       disabled_features: [
  //         'header_widget',
  //         'symbol_search_hot_key',
  //         'study_dialog_search_control',
  //         'display_market_status',
  //         'header_compare',
  //         'edit_buttons_in_legend',
  //         'symbol_info',
  //         'datasource_copypaste',
  //         'right_bar_stays_on_scroll',
  //         'compare_symbol',
  //         'study_templates',
  //         'edit_buttons_in_legend',
  //         'save_load_buttons',
  //         'header_saveload',
  //         'save_chart_properties_to_local_storage',
  //         'use_localstorage_for_settings',
  //         'header_settings',
  //         'header_undo_redo',
  //         'header_screenshot',
  //         'show_logo_on_all_charts',
  //         'legend_context_menu',
  //       ],
  //     };

  //     const tvWidget = new widget(widgetOptions);
  //     this.tvWidget = tvWidget;

  //     tvWidget.onChartReady(() => {
  //       const formattedZerosForPrecision = this.padTrailingZeros(1,this.pair['group_precision']);
  //       this.tvWidget.mainSeriesPriceFormatter()._priceScale = formattedZerosForPrecision;
  //       this.tvWidget.mainSeriesPriceFormatter()._fractionalLength = this.pair['group_precision'];
  //       this.setChartType()
  //       this.tvWidget.activeChart().executeActionById('drawingToolbarAction')
  //       this.tvWidget.activeChart().executeActionById('drawingToolbarAction')
  //     })


  //     setTimeout(()=>{
  //       if(this.tvWidget){
  //         const chart1=this.tvWidget.activeChart()

  //         if ( /Mobi|Android/i.test(navigator.userAgent)) {
  //           chart1.executeActionById("drawingToolbarAction");
  //           const iframe = document.getElementsByTagName('iframe')[0];
  //            const ifrDoc = iframe.contentWindow.document;
  //            const hideButton = ifrDoc.querySelector('#drawing-toolbar')
  //            if (hideButton) {
  //              ifrDoc.getElementsByClassName('toggleButton-3TAD9tll')[0].style.display = 'none';
  //            }
  //         }
  //       }

  //     },1400);
  //   }catch(error){
  //     console.log('error',error)
  //   }
  // }

  return (
    <>
      <div className="TVChartContainer"/>
    </>
  )
}
