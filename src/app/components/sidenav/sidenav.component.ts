import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { SideNavToggle } from 'src/app/interface/side-nav-toggle';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
         style({ opacity: 1 })
         )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
         style({ opacity: 0 })
         )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)',offset:'0'}),
          style({transform:'rotate(2turn)',offset:'1'})
        ]))
      ])
    ])
  ],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWith = window.innerWidth;
    if (this.screenWith <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWith,
      });
    }
  }

  ngOnInit(): void {
    this.screenWith = window.innerWidth;
  }

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWith = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWith,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWith,
    });
  }
}
