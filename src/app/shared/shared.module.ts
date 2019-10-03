import { NgModule } from "@angular/core";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrombsComponent } from "./breadcrombs/breadcrombs.component";

@NgModule({
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
