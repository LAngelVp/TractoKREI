import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-hero-home',
  imports: [CommonModule],
  templateUrl: './hero-home.html',
  styleUrl: './hero-home.css',
})
export class HeroHome {
  logotipo: string = "logos/logovectoresFondoOscuroSinFondo.png";
  texto_alternativo_logo: string = "logotipo";
  texto_principal : string = "PROXIMAMENTE";
  eslogan:string = "UNA NUEVA ERA SE AVECINA.";
  // Estados iniciales
  mostrarTexto: boolean = false;
  mostrarLogo: boolean = false;
  mostrarTexto2: boolean = false;
  mostrarLoader: boolean = false;
  
  constructor(private cdRef: ChangeDetectorRef) {}
  
  ngOnInit() {
    // Secuencia de animaciones:
    
    // 1. Después de 0 segundos: mostrar texto PROXIMAMENTE
    setTimeout(() => {
      this.mostrarTexto = true;
      this.cdRef.detectChanges();
      console.log("Mostrando texto: PROXIMAMENTE");
    }, 0);
    
    // 2. Después de 6 segundos: ocultar texto
    setTimeout(() => {
      this.mostrarTexto = false;
      this.cdRef.detectChanges();
      console.log("Ocultando texto");
    }, 7000);
    
    // 3. Después de 7 segundos: mostrar logo con animación
    setTimeout(() => {
      this.mostrarLogo = true;
      this.cdRef.detectChanges();
      console.log("Mostrando logo con animación");
    }, 7500);

    setTimeout(() => {
      this.mostrarTexto2 = true;
      this.cdRef.detectChanges();
      console.log("Mostrando texto 2");
    }, 10000);

    setTimeout(() => {
      this.mostrarLoader = true;
      this.cdRef.detectChanges();
      console.log("Mostrando loader");
    }, 12500);
  }
}
