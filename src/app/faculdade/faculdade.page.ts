import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-faculdade',
  templateUrl: './faculdade.page.html',
  styleUrls: ['./faculdade.page.scss'],
})
export class FaculdadePage implements OnInit {
  public itens:any;
  constructor(private httpService: HttpClient) { 
    this.Faculdade
  }

  ngOnInit() {
  }
 
  url="http://localhost:8010";
  data={};
  Faculdade(){
    console.log(this.data);
     this.httpService.post( this.url+'/admin/instituicao', this.data).map(res => res ).subscribe(
      data=>{
        window.alert("Cadastrado com Sucesso!")
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }
       
}

