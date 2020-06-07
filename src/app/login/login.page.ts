import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public itens:any;
  constructor(private httpService: HttpClient) {
    this.postJSON
  }

  logindata:any ={};

  ngOnInit() {
  }
  url="http://localhost:8010";
  data= {};
  postJSON(){
    console.log(this.data);
     this.httpService.post( this.url+'/auth/autentica', this.data).map(res => res ).subscribe(
      data=>{
        this.itens = data;
        var token= this.itens.token
        var cargo= this.itens.cargos
         console.log(data);
         if(cargo=="admin"){
           window.location.href = "dashboard"
         }
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

}
