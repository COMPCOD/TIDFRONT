import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {

  contadata:any ={};
  
  constructor(private httpService: HttpClient) { 
    this.Receita
  }

  ngOnInit() {
  }

  url="http://localhost:8010";
  Receita(){
    console.log(this.contadata);
     this.httpService.post( this.url+'/admin/receita', this.contadata).map(res => res ).subscribe(
      data=>{
        window.alert("Pagamento realizado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

}
