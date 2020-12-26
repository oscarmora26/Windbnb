import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) {
    console.log("EL servicio esta funcionando correctamente")
    
  }

  getPlace() {
    return this.http.get('assets/stays.json')
  }
}
