import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isVisible: any;
  password: any

  constructor(private userService :UserService ,private http:HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  onRegister(data:any){
    this.userService.login()
   
    console.log(data)
   //Add the User to the Database
   this.http.post('http://localhost:3000/register',data, {responseType:'text'})
   .subscribe((results)=>{

     

     if(results == 'successfully registered'){
     
      this.router.navigate(['home']);
      console.warn('sucess');
      alert('successfully registered');
      
     }
     else{
      alert(results)
      
     }
     
   })
  }


}


