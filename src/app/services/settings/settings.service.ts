import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    const localAjustes = localStorage.getItem("ajustes");
    if (localAjustes) {
      this.ajustes = <Ajustes>JSON.parse(localAjustes);
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(newTheme) {
    const url = `assets/css/colors/${newTheme}.css`;
    this._document.querySelector("#theme-style").setAttribute("href", url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = newTheme;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
