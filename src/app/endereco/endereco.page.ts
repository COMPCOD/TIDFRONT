import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  constructor(private httpService: HttpClient) {
    this.Endereco
   }

  ngOnInit() {
  }
  url="http://localhost:8010";
  data={};
  Endereco(){ 
    console.log(this.data);
     this.httpService.post( this.url+'/admin/endereco', this.data).map(res => res ).subscribe(
      data=>{
        window.alert("Endereço Cadastrado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }  

}
