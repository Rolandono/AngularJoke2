import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    user:string;
    pass:string;
    
    
  constructor(private router:Router) { 
    this.user = "";
    this.pass = "";
    if(localStorage.getItem("user")) this.router.navigate(['/list']);
  }

  ngOnInit(): void {
  }
  Login(user:string, pass:string){
      if(this.LoginValues(user, pass)){
          if(user == "admin" && pass == "admin"){
              this.router.navigate(['/list']); 
              localStorage.setItem("user", "admin");
          }
          else alert("No user like this");
      }
      else alert("Fill up the inputs");
  }

  LoginValues(user:string, pass:string){
      if(user.length > 0
        && pass.length > 0)
          return true;
        else return false;
  }
}
