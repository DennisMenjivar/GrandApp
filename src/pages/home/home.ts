// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, Toast, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private contactos

  options: string[] = ['Contactos', 'Recordatorios', 'Ejercicios', 'Noticias', 'Musica', 'Alertas', 'Ajuster', 'Comunidad', 'Beneficios', 'Juegos']

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    // public _auxiliarService: AuxiliarService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
    this.contactos = ContactosPage;
  }

  verContactos() {
    var params = {
      // param_cliente: this.cliente
    };

    this.navCtrl.push(this.contactos, params);

  }

  showToast(msg: string) {
    this.loader.dismiss();

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
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

}
