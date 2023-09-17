import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-contentdois',
  templateUrl: './contentdois.component.html',
  styleUrls: ['./contentdois.component.css']
})
export class ContentdoisComponent implements OnInit {
  photoCover:string=""
  contentTitle :string=""
  contentDescription:string=""
  private id:string |null="0"

  constructor(private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
    this.id = value.get("id")
      )
      this.setValuesToComponent(this.id)
    }

  setValuesToComponent(id:string | null ){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }





}
