import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string ="Jhonatan";
  public gender:"male"| 'female' ='male';
  public invitationMap={
    'male': 'invitarlo',
    'female':'invitarla'
  }
  changeClient():void{
    this.name ="Cecilia";
    this.gender = "female";
  }
  //i18nPlural
  public clients:string[]=['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient():void{
    this.clients.shift();
  }
  //keyValue Pipe
  public person={
    name: 'Jhonatan',
    age: 30,
    address: 'Piura, Perú'
  }

  //async Pipe
  public myObservableTime = interval(1000);
}
