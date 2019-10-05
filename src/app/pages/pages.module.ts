import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Modules
import { ChartsModule } from "ng2-charts";
import { SharedModule } from "../shared/shared.module";

import { PagesRoutingModule } from "./pages-routing.module";

// Pages
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

// Components
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficasDonaComponent } from "../components/graficas-dona/graficas-dona.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficasDonaComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule {}
