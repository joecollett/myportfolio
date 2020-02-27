import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(300, style({opacity: 1}))
      ]),        
    ])
  ]    
})
export class ContactComponent implements AfterViewInit {

  form: FormGroup;
  animation = false;
  
    constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
      this.createForm();
    }
  
    createForm() {
      this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required],
      });
    }
  
    onSubmit() {
      const {name, email, message} = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
  
      let formRequest = { name, email, message, date, html };
  
      this.af.list('/messages').push(formRequest);
      this.form.reset();
    }

    ngAfterViewInit() {
      setTimeout(() => {
        this.animation = true;
      }, 1200);
    }      

}
