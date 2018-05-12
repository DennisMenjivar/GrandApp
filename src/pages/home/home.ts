// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, Toast, LoadingController, Button } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private contactos

  options: string[] = ['Contactos', 'Recordatorios', 'Ejercicios', 'Noticias', 'Musica', 'Alertas', 'Ajuster', 'Comunidad', 'Beneficios', 'Juegos'];
  buttons: ButtonsActions[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    // public _auxiliarService: AuxiliarService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
    this.loadButtonActions();
    this.contactos = ContactosPage;
  }

  accion(op: ButtonsActions) {
    console.log("Evento:", op.title);
    if (op.title == 'Contactos') {
      this.verContactos();
    }
  }

  loadButtonActions() {
    this.buttons = [];
    let cont: number = 0;
    this.options.forEach(element => {
      let ba: ButtonsActions = new ButtonsActions();
      ba.id = cont;
      ba.title = element;
      ba.color = "black";
      this.buttons.push(ba)
      cont++;
    });
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
export class ButtonsActions {
  id: number;
  title: string;
  color: any;
}