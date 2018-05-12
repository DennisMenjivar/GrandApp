import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ActionSheetController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    // , public _auxiliarService: AuxiliarService
    , public loadingCtrl: LoadingController
    , public modalCtrl: ModalController
    , public actionSheetCtrl: ActionSheetController
    , public toastCtrl: ToastController) {
  }

  contactos: Contacto[];

  ionViewDidLoad() {
    this.presentLoading("Cargando Detalle...");
    this.loadContactos();


    this.loader.dismiss();
  }

  loadContactos() {
    this.contactos = [];
    this.contactos.push(new Contacto(0, 'Luis Montalvo', '+504 9856-9837', 'San Pedro Sula, Cortes'));
    this.contactos.push(new Contacto(0, 'Esthela Montalvo', '+504 3331-4578', 'San Pedro Sula, Cortes'));
    this.contactos.push(new Contacto(0, 'José Montalvo', '+504 9670-9080', 'San Pedro Sula, Cortes'));
    this.contactos.push(new Contacto(0, 'Jeremy Matthew Menjivar', '+504 8897-4509', 'San Pedro Sula, Cortes'));
    this.contactos.push(new Contacto(0, 'Dennis Menjivar ', '+504 9992-7135', 'San Pedro Sula, Cortes'));
  }

  loader = this.loadingCtrl.create({
    content: "Cargando..."
  });

  presentLoading(msg: string) {
    this.loader = this.loadingCtrl.create({
      content: msg
    });
    this.loader.present();
  }

  doRefresh(refresher) {
    this.loadContactos();
    refresher.complete();
  }

}

export class Contacto {
  id: number;
  nombre: string;
  numero: string;
  direccion: string;

  constructor(pId: number, pNombre: string, pNumero: string, pDireccion: string) {
    this.id = pId;
    this.nombre = pNombre;
    this.numero = pNumero;
    this.direccion = pDireccion;
  }
}
