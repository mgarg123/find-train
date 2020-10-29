import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  public expandNavClassList = {
    "expand-nav": true,
    "expand": false
  }

  ngOnInit(): void {
  }

  hoverIn(event): void {
    // console.log(event)
    let node: HTMLElement = event.target.childNodes[1];
    node.classList.add("expand");
    event.target.style.borderLeft = "4px solid rgb(95,2,59)";
  }


  hoverOut(event): void {
    let node: HTMLElement = event.target.childNodes[1];
    node.classList.remove("expand");
    event.target.style.borderLeft = "none";
  }

  navigateTo(link) {
    this.route.navigate(["/" + link]);
  }

}
