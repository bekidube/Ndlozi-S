import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TradeService } from '../Services/trade.service';

@Component({
  selector: 'app-tradestats',
  templateUrl: './tradestats.component.html',
  styleUrls: ['./tradestats.component.scss']
})



export class TradestatsComponent implements OnInit {
  trade:any;
  trad={};
  constructor(private http: HttpClient,private tradeservice:TradeService) { }
  ngOnInit() {
    
    this.tradeservice.getTrade().subscribe((data)=>{
      this.trade= data;
        this.trad=this.trade.data;
        console.log(data)
   
      })
  
  }


}




 

