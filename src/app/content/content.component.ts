import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
MyForm: FormGroup;

constructor(private http:HttpClient){
  this.MyForm=new FormGroup({
  })
}

  ngOnInit(){
    this.MyForm=new FormGroup({
      'FirstName': new FormControl( Validators.required),
      'LastName': new FormControl(null, [Validators.required ,Validators.email]),
      'email': new FormControl(null, Validators.required),
      'Contact No': new FormControl(null, Validators.required),
      'Message': new FormControl(null),
    });
  }
    onSubmit(){
      console.log(this.MyForm);
      this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(posts =>{
        console.log(posts);
      });
    }
   
}

