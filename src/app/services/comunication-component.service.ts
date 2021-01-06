import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationComponentService {

  filtro: any
  enviarFiltroSubjet = new Subject<any>()
  enviarFiltroObservable = this.enviarFiltroSubjet.asObservable()
  constructor() { }

  enviarFiltro(e:any){
    this.filtro = e
    this.enviarFiltroSubjet.next(this.filtro)
  }
  
}
