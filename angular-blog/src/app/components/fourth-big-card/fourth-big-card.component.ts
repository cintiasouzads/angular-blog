import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-big-card',
  templateUrl: './fourth-big-card.component.html',
  styleUrls: ['./fourth-big-card.component.css']
})
export class FourthBigCardComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string = "0"

  constructor(){}

  ngOnInit(): void {}
}
