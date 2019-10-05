import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then(data => console.log("Termino", data))
      .catch(error => console.error("Error en la promesa", error));
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    const promesa = new Promise<boolean>((resolve, reject) => {
      let contador = 0;
      const intervalor = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // reject("test");
          clearInterval(intervalor);
        }
      }, 1000);
    });

    return promesa;
  }
}
