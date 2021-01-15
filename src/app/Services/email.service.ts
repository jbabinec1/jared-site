import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  addEmail(subject, email, text) {
    const mail = {
      subject: subject,
      email: email,
      text: text
    };
    return this.http.post('http://localhost:3000/email', mail);   //  'http://localhost:3000/bugs/add'    //'/bugs/add'
  }

}
