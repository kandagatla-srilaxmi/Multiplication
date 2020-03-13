import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @Input('sri') public mul:number;

  public count:number[]=[];

  constructor() { 
    for(var i=1;i<=10;i++)
      this.count.push(i);
  }

  ngOnInit(): void {
    
  }

}
