import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Pages
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { PagesRoutingModule } from "./pages/pages-routing.module";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NopagefoundComponent }
];

@NgModule({
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
