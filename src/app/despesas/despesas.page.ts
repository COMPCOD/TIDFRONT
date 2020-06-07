import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {

  contadata:any ={};
  
  constructor(private httpService: HttpClient) { 
    this.Despesas
  }

  ngOnInit() {
  }

  url="http://localhost:8010";
  Despesas(){
    console.log(this.contadata);
     this.httpService.post( this.url+'/admin/despesas', this.contadata).map(res => res ).subscribe(
      data=>{
        window.alert("Pagamento realizado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

}
