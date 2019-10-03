import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Routes
import { AppRoutingModule } from "./app-routing.module";

// Modules
import { PagesModule } from "./pages/pages.module";

// Pages
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
