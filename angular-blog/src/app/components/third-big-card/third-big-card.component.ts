import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-third-big-card',
  templateUrl: './third-big-card.component.html',
  styleUrls: ['./third-big-card.component.css']
})
export class ThirdBigCardComponent {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string = "0"
}
