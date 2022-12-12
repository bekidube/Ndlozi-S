import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://fcsapi.com/api-v3/forex/latest?symbol=EUR/USD,USD/JPY,GBP/CHF&access_key=szFrw7qps9UXQ4I3REMR';
  getTrade() {
    return this.http.get(this.configUrl);
  }
}
