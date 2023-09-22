import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showSideBar: boolean = false;
  constructor() {

  }
  ngOnInit(): void {

  }

  onShowSideBar(): void {
    this.showSideBar =!this.showSideBar;
  }
}
