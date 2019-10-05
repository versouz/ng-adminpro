import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent {
  @Input("nombre") leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild("txtProgress", { static: false }) txtProgress: ElementRef;

  constructor() {}

  onChanges(newValue) {
    if (newValue >= 100) newValue = 100;
    if (!newValue || newValue <= 0) newValue = 0;

    this.progreso = newValue;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(value) {
    this.progreso += value;
    if (this.progreso >= 100) this.progreso = 100;
    if (this.progreso <= 0) this.progreso = 0;

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
