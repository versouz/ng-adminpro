import { Component, OnInit } from "@angular/core";

declare function initSiderBar();

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initSiderBar();
  }
}
