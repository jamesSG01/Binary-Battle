import { Component, OnInit } from '@angular/core';


declare const TradingView: any;

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
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
  }

}
