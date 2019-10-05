import { Component, Input } from "@angular/core";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-graficas-dona",
  templateUrl: "./graficas-dona.component.html",
  styleUrls: ["./graficas-dona.component.css"]
})
export class GraficasDonaComponent {
  @Input() labels: Label[] = [];
  @Input() data: MultiDataSet = [];

  constructor() {}
}
