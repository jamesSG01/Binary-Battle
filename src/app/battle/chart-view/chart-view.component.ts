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
      "symbol": "COINBASE:BTCUSD",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_legend": true,
      "range": "1D",
      "save_image": false,
      "container_id": "tradingview_ae039"
    }
      );
  }

}
