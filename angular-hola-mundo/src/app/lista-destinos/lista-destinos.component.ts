import { Component, OnInit } from '@angular/core';
import {DestinoViaje} from 'src/app/models/destino-viaje';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() { 
     this.destinos = [];
  }
  guardar(n:string, u:string): boolean {
    this.destinos.push(new DestinoViaje(n, u));
    return false;
  }
  elegido(d:DestinoViaje){
    this.destinos.forEach(function (x){x.setSelected(false);});
    d.setSelected(true);
  }


  ngOnInit(): void {
  }

}
