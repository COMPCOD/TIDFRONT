import { Injectable } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AuthenticateService } from './../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor( 
    public navCtrl: NavController,
    public authService: AuthenticateService) { }

    logout(){
      this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
