import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import "src/assets/smtp.js";
declare let Email: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(form: NgForm) {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "hhhansu@gmail.com",
      // Password : "A9FDA1CDF3C638390F8C5260BC024B8406661926D6A5FD8A659F627A9CF9D59FDD157C9F41B0AF282E083C52A7D34DA87",
      Password : "DF0749BD6449C003607A70A3BC722036FCEC",
      To : "hhhansu@gmail.com",
      From : `hhhansu@gmail.com`,
      Subject : form.value.subject,
      Body : `
      <i>This is sent as a message from https://hansu-webshop.web.app/</i> <br/> 
      <br>
      <br>
      <b>Email: </b>${form.value.email}<br /> 
      <b>Subject: </b>${form.value.subject}<br /> 
      <b>Message:</b> <br />
      ${form.value.message} 
      <br>
      <br> 

      <b>End of Message</b> `,
      Attachments : [
        {
          name : "smtpjs.png",
          path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
      }).then( (message: any) => {
        alert(message); 
        form.resetForm(); } );
  }

}
