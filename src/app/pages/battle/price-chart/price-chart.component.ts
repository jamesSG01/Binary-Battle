import { Component, OnInit } from '@angular/core';


declare const TradingView: any;

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  proMode:boolean = false;
  hideBTC:boolean = false;
  hideSPY:boolean = true;
  hideXAU:boolean = true; 
  hideCAD:boolean = true; 
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

    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "FX:USDCAD",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "save_image": false,
      "container_id": "tradingview_a4527"
    }
      );
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "FRED:SP500",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "save_image": false,
      "container_id": "tradingview_4c981"
    }
      );
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "OANDA:XAUUSD",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "save_image": false,
      "container_id": "tradingview_34a83"
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
        this.hideXAU = true;
        this.hideSPY = true;
        this.hideCAD = true;
        break;
      } case 'XAU': {
        this.hideBTC = true;
        this.hideXAU = false;
        this.hideSPY = true;
        this.hideCAD = true;
        break;
      }case 'CAD': {
        this.hideBTC = true;
        this.hideXAU = true;
        this.hideSPY = true;
        this.hideCAD = false;
        break;
      }case 'SPY': {
        this.hideBTC = true;
        this.hideXAU = true;
        this.hideSPY = false;
        this.hideCAD = true;
        break;
      }
    }
  }
}
