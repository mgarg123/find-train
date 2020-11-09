import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public isMenuOpen: boolean = false;
  @Output()
  public menuOpenEvent = new EventEmitter();

  ngOnInit(): void {
  }

  openMenu(event: Event) {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuOpenEvent.emit(this.isMenuOpen);
  }

}
