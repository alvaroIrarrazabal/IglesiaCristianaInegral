import { Component } from '@angular/core';
import { SideNavToggle } from './interface/side-nav-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IglesiaCristianaInegral';
  isSidenavCollapsed = false;
  screenWidth = 0;

  onToggleSidenav(data:SideNavToggle):void{
  this.screenWidth = data.screenWidth;
  this.isSidenavCollapsed= data.collapsed;
  }
}
