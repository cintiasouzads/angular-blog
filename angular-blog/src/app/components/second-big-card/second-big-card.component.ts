import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-big-card',
  templateUrl: './second-big-card.component.html',
  styleUrls: ['./second-big-card.component.css']
})
export class SecondBigCardComponent implements OnInit {

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string = "0"

  ngOnInit(): void {
   
  }

}
