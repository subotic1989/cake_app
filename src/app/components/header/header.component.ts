import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpen: boolean = false;
  scrollY = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.scrollY = window.pageYOffset;
  }
}
