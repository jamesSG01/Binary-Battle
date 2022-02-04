import { Component, OnInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})

export class ChartViewComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
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
      "width": "900",
      "height": "400",
      "locale": "en",
      "colorTheme": "dark",
      "gridLineColor": "rgba(0, 0, 0, 0)",
      "fontColor": "#787B86",
      "isTransparent": true,
      "autosize": false,
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

}
