import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  listadoclientes = [];
  productos = ["Pan de caja", "Papel Higienico", "Caja Pilsener", "Garron de Agua", "Alitas"];
  producto: string;
  id: number;
  descuento: number;
  total;
  n: number;
  nombre: string;
  descripcion: string;
  dui: number;
  enviar: boolean = false;
  cliente: any;
  registros = [];
  precio: number;
  puedecomprar:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    this.n = 0;
    this.nombre = '';
    this.producto = "";
    this.precio = 0;
    this.id = 0;
    this.descuento = 0;
    this.total = 0;
  }

  comprobacionPrecio(){
    if(isNaN(this.listadoclientes[this.dui])){
      this.listadoclientes[this.dui] = 1;
      this.descuento = 0;
      this.total = this.precio;
    }
    else{
      if(this.listadoclientes[this.dui] == 2){
        this.descuento = 5;
        this.total = Number(this.precio - (this.precio * (this.descuento / 100))).toFixed(2);
      }
      else if(this.listadoclientes[this.dui] >= 5){
        this.descuento = 10;
        this.total = Number(this.precio - (this.precio * (this.descuento / 100))).toFixed(2);
      }  
    }
    this.puedecomprar = true;
  }

  calculo() {
    this.enviar = true;
    this.n++;
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
    if(isNaN(this.listadoclientes[this.dui])){
      this.listadoclientes[this.dui] = 1;
    }
    else{
      this.listadoclientes[this.dui]++;
    }
    this.puedecomprar = false;
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
