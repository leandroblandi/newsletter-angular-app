import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public titulo: string = 'Newsletter - MiamiFolk';
  public nombre: string = '';
  public email: string = '';

  public personas: any[];

  public registrado: boolean = false;
  public mensajeRegistro: string = '';

  public constructor() {
    this.personas = []
    }

  public registrarUsuario(): void {
    
    if((this.nombre.length > 0) && (this.email.length > 0)) {
      this.mensajeRegistro = `¡${this.nombre}! Te suscribiste correctamente al newsletter, chequeá tu correo, estarás recibiendo más información`;
      this.registrado = true;

      this.personas.push({
        nombre: this.nombre,
        mail: this.email
      });
    }
  }

  public eliminarUsuario(): void {
    this.nombre = '';
    this.email = '';
    this.mensajeRegistro = '';
    this.registrado = false;
  }

  public limpiarLista(): void {
    this.personas.splice(0, this.personas.length);
    console.log(this.personas);
  }
}
