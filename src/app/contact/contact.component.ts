import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {EmailService} from '.././Services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup;
  
  constructor(private fb: FormBuilder, private emailService: EmailService) { 

    this.emailForm = this.fb.group({
      subject: '',
      email: '',
      text: ''
      
    })
  }

  

  ngOnInit() {
  }


submitted: boolean = false; 

sendEmail(subject, email, text, err, res) {
  this.emailService.addEmail(subject, email, text).subscribe((item: any) => {
   
console.log(item.body.text);

  })

  this.submitted = true;

  this.emailForm.reset();
}



}
