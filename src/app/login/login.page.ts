import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private alertController: AlertController) {}

  async onSubmit() {
    if (this.username && this.password) {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      await this.showAlert('Error', 'Ingrese un usuario y contraseña válidos');
    }
  }
  
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  resetPassword() {
    this.router.navigate(['/reset-password']);    
  }
}
