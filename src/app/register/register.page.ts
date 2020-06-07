import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public itens:any;
  constructor(public navCtrl: NavController, private httpService: HttpClient) {
    this.Cadastro
   }

  ngOnInit() {
  }

  url="http://localhost:8010";
  data={};
  Cadastro(){
    console.log(this.data);
     this.httpService.post( this.url+'/admin/cadastro', this.data).map(res => res ).subscribe(
      data=>{
        window.alert("Associado Cadastrado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

}
