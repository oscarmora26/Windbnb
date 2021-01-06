import { Component, OnInit, Input } from '@angular/core';
import { ComunicationComponentService } from '../services/comunication-component.service';
import { PlaceService } from '../services/place.service'
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  allPlace: any = null
  placeFilter: any
  @Input('menuState') menuState: any
  constructor(private _placeService: PlaceService, private _comunicationService: ComunicationComponentService) {
    this.getPlace()
  }

  ngOnInit(): void {
    this._comunicationService.enviarFiltroObservable.subscribe(res => {
      this.placeFilter = this.allPlace.filter(x => x.city == res.city && x.maxGuests >= res.maxGuests)
    })
  }

  async getPlace() {
    this._placeService.getPlace().subscribe(res => {
      this.allPlace = res
      this.placeFilter = res
    })
  }
}
