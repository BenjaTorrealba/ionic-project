import { Component , OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = 'Usuario';

  constructor(private navCtrl: NavController, private alertController: AlertController,private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '¿Desea cerrar sesion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar Sesion',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  logout() {
    this.navCtrl.navigateBack('/login');
  }
}

