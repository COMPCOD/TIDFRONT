import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.page.html',
  styleUrls: ['./ponto.page.scss'],
})
export class PontoPage implements OnInit {

  constructor(private httpService: HttpClient) {
    this.Ponto
   }

  ngOnInit() {
  }

  url="http://localhost:8010";
  data={Id_associado:"1"};
  Ponto(){
    console.log(this.data);
     this.httpService.post( this.url+'/admin/ponto', this.data).map(res => res ).subscribe(
      data=>{
        window.alert("Ponto Incluso com Sucesso ")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

}
