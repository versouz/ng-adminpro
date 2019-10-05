import { NgModule } from "@angular/core";

// Modules
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// Pages
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrombsComponent } from "./breadcrombs/breadcrombs.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrombsComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrombsComponent,
    NopagefoundComponent
  ]
})
export class SharedModule {}
