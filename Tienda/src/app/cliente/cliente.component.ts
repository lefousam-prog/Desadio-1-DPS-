import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  productos = ["Pan de caja", "Papel Higienico", "Caja Pilsener", "Garron de Agua", "Alitas"];
  producto: string;
  id: number;
  descuento: number;
  total: number;
  n: number;
  nombre: string;
  descripcion: string;
  dui: number;
  enviar: boolean = false;
  cliente: any;
  registros = [];
  precio: number;
  

  constructor() { 

  }

  ngOnInit(): void {
    
    this.n = 0;
    this.nombre = '';
    this.producto = "";
    this.precio = 0;
    this.id = 0;
    this.descuento = 0;
    this.total = 0;

  }

  calculo() {
    this.enviar = true;
    this.n++;

    if (this.n == 1) {


      this.cliente = {
        "n": this.n,
        "nombre":this.nombre,
        "dui": this.dui,
        "producto": this.producto,
        "id":this.id,
        "descripcion":this.descripcion,
        "precio": this.precio,
        "descuento": this.descuento,
        "total":this.total
      };
      this.registros.push(this.cliente);
    }
    else if(this.n>1) {
      
    }
   
    
    
    
  }

  cambio() {
    
    switch (this.producto) {
      case 'Pan de caja':
        this.id = 100;
        this.precio = 1.40;
        break;
      case 'Papel Higienico':
        this.id = 101;
        this.precio = 8.00;
        break;
      case 'Caja Pilsener':
        this.id = 102;
        this.precio = 15.00;
        break;
      case 'Garron de Agua':
        this.id = 103;
        this.precio = 2.40;
        break;
      case 'Alitas':
        this.id = 104;
        this.precio = 2.10;
        break;
    }
  }
  

}
