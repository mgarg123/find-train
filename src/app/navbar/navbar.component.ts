import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) {
    this.screenWidth = screen.width;
  }

  public selectedNavOption: string = "live-status";
  public screenWidth: number = 0;

  public expandNavClassList = {
    "expand-nav": true,
    "expand": false
  }

  @Input()
  public isNavOpen: boolean = false;

  ngOnInit(): void {
  }

  hoverIn(event): void {
    // console.log(event)
    let node: HTMLElement = event.target.childNodes[1];
    node.classList.add("expand");
    // event.target.style.borderLeft = "4px solid rgb(95,2,59)";
  }


  hoverOut(event): void {
    let node: HTMLElement = event.target.childNodes[1];
    node.classList.remove("expand");
    // event.target.style.borderLeft = "none";
  }

  navigateTo(link) {
    this.selectedNavOption = link;
    this.route.navigate(["/" + link]);
  }

}
