import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})
export class FornecedorPage implements OnInit {
  fornecedor:any ={};
  constructor(private httpService: HttpClient) {
    this.Cadastro
   }

  ngOnInit() {
  }
 
  url="http://localhost:8010";
  data={};
  Cadastro(){ 
    console.log(this.data);
     this.httpService.post( this.url+'/admin/fornecedor', this.data).map(res => res ).subscribe(
      data=>{
        window.alert("Fornecedor Cadastrado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }  
}


