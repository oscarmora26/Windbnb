import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuState: Boolean = true
  @Output() cambioMenu = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showCloseMenu(){
    this.cambioMenu.emit(this.menuState)
    this.menuState = !this.menuState    
  }

}
