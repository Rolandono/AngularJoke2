import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    title = 'Jokes';
    ngOnInit(): void {               
    }
    
    constructor(private router:Router){
        if(localStorage.length < 2)
            this.getData(); 
        if(!localStorage.getItem("user"))this.router.navigate(['/login']);
        else this.router.navigate(['/list']);
    }
  
    getData(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(xhttp.responseText);
                for(var i = 0; i < response.length; i++){
                    localStorage.setItem(i.toString(), JSON.stringify(response[i]));
                }
                localStorage.setItem("active", '0,1,2,3,4,5,6,7,8,9');
                localStorage.setItem("BiggestID", '9');
            }
        }
        xhttp.open("GET", "https://official-joke-api.appspot.com/jokes/ten", true);
        xhttp.send();
    }
}
