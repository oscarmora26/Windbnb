import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../services/place.service'
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  allPlace: any = null
  @Input('menuState') menuState:any
  constructor(private _placeService:PlaceService) {
      this.getPlace()
   }

  ngOnInit(): void {
  }

  async getPlace(){
    this._placeService.getPlace().subscribe(res => {
      console.log(res)
      this.allPlace = res
    })
  }
}
