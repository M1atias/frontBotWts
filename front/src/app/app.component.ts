import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = 'http://localhost:9000/send'
  to:any;
  message:any;

  constructor(private httpClient: HttpClient){

  }

  sendMessage():any{
    this.httpClient.post(this.url,{
      message:this.message,
      to:this.to
    }).subscribe((res:Object) =>{
      console.log('Mensaje enviado')
    },(err)=>{
      console.log('No se envio')
    })
  }

}

