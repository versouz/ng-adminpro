import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
  imports: [BrowserModule, AppRoutingModule, PagesModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
