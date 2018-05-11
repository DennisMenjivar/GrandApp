// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, Toast, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options:string[] = ['Contactos','Recordatorios','Ejercicios','Noticias','Musica','Alertas','Ajuster','Comunidad','Beneficios','Juegos']
  
  constructor(public navCtrl: NavController) {

  }

}
