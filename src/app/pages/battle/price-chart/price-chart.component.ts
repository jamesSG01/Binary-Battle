import { Component, OnInit } from '@angular/core';


declare const TradingView: any;

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  proMode:boolean = false;
  hideBTC:boolean = true;
  hideETH:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
    //BTCUSD
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "COINBASE:BTCUSD",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "container_id": "tradingview_ce365"
      }
    );
    //ETHUSD
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "COINBASE:ETHUSD",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "container_id": "tradingview_adef8"
      }
    );
    //light weight
    new TradingView.MediumWidget(
      {
      "symbols": [
        [
          "COINBASE:BTCUSD|1D"
        ],
        [
          "FX:USDCAD|1D"
        ],
        [
          "S&P",
          "AMEX:SPY|1D"
        ],
        [
          "OANDA:XAUUSD|1D"
        ]
      ],
      "chartOnly": true,
      "width": "100%",
      "height": "600px",
      "locale": "en",
      "colorTheme": "dark",
      "gridLineColor": "rgba(0, 0, 0, 0)",
      "fontColor": "#787B86",
      "isTransparent": true,
      "autosize": true,
      "showVolume": false,
      "scalePosition": "no",
      "scaleMode": "Normal",
      "fontFamily": "Andale Mono, monospace",
      "noTimeScale": false,
      "valuesTracking": "1",
      "chartType": "area",
      "lineColor": "rgba(0, 255, 0, 1)",
      "bottomColor": "rgba(0, 0, 0, 0)",
      "topColor": "rgba(0, 255, 0, 0.3)",
      "container_id": "tradingview_11397"
    }
    );
  }
  setProMode() {
    this.proMode = !this.proMode;
  }
  show(ticker:string) {
    switch(ticker){
      case 'BTC': {
        this.hideBTC = false;
        this.hideETH = true;
        break;
      } case 'ETH': {
        this.hideETH = false;
        this.hideBTC = true;
        break;
      }
    }
  }
}
