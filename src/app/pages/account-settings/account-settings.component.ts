import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../services/service.index";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(private _ajustes: SettingsService) {}

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(newColor) {
    this._ajustes.aplicarTema(newColor);
    this.colocarCheck();
  }

  colocarCheck() {
    const selectores = document.querySelectorAll(".selector.working");
    for (let i = 0; i < selectores.length; i++) {
      selectores[i].classList.remove("working");
    }

    const theme = this._ajustes.ajustes.tema;
    const el = document.querySelector(`[data-theme="${theme}"]`);
    if (el) el.classList.add("working");
  }
}
