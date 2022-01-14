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
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "BINANCE:BTCPERP",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "save_image": false,
      "studies": [
        "BollingerBandsR@tv-basicstudies",
        "StochasticRSI@tv-basicstudies",
        "VWAP@tv-basicstudies"
      ],
      "container_id": "tradingview_af631"
      }
    );
  }

}
