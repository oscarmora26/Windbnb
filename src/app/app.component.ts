import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windbnb-master';
  
  menuState:any
  getMenuState(e){
    console.log(e)
    this.menuState = e
  }
}
