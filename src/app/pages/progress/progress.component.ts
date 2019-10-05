import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"]
})
export class ProgressComponent implements OnInit {
  progreso: number = 50;
  progreso2: number = 10;

  constructor() {}

  ngOnInit() {}
}
