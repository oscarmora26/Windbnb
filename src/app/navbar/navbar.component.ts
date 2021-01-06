import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { ComunicationComponentService } from '../services/comunication-component.service';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuState: Boolean = true
  @Output() cambioMenu = new EventEmitter()
  @ViewChild('addLocation', {static: true}) addLocation: ElementRef
  allPlace: any = null
  adult:number = 0
  children: number = 0
  city: string = null
  country: string = null

  constructor(private _placeService:PlaceService, private _comunicationService: ComunicationComponentService) { 
    this.getPlace()
  }

  ngOnInit(): void {
  }

  showCloseMenu(){
    this.cambioMenu.emit(this.menuState)
    this.menuState = !this.menuState    
  }
  
  async getPlace(){
    this._placeService.getPlace().subscribe(res => {
      this.allPlace = res
    })
  }

  addCity(city: string, country: string){
    this.city = city
    this.country = country
    let location = document.getElementById('addLocation')
    location.innerText = `${city} , ${country}`
  }

  search(){
    let filtro = {
      "maxGuests": this.adult + this.children,
      "city": this.city,
      "country": this.country      
    }
    this._comunicationService.enviarFiltro(filtro)
  }

}
