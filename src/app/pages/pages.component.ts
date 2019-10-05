import { Component, OnInit } from "@angular/core";

declare function initSiderBar();

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styles: []
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initSiderBar();
  }
}
