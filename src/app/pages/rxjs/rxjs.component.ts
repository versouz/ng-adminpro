import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscrition: Subscription;

  constructor() {
    this.subscrition = this.regresaObservable().subscribe(
      numero => console.log("onNext", numero),
      error => console.error("Error en el obs", error),
      () => console.log("onComplete")
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log("onDestroy RsjsCompoent");
    this.subscrition.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable<any>(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };

        observer.next(salida);
        // console.log(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          // clearInterval(intervalo);
          observer.error("Boom!!!");
        }
      }, 1000);
    }).pipe(
      retry(2),
      map(data => data.valor),
      filter((valor, index) => {
        return valor % 2 === 1;
      })
    );
  }
}
