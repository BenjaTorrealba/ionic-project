import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  async onSubmit() {
    const alert = await this.alertCtrl.create({
      header: 'Solicitud enviada',
      message: 'La solicitud para restablecer la contraseña ha sido enviada.',
      buttons: ['OK']
    });

    await alert.present();
    this.navCtrl.navigateForward('/login');
  }
}
