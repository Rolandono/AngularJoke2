import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    logOut(){
        localStorage.removeItem("user");
        this.router.navigate(['/login']); 
    }

    newJokes(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(xhttp.responseText);
                for(var i = 0; i < response.length; i++){
                    localStorage.setItem(i.toString(), JSON.stringify(response[i]));
                }
                localStorage.setItem("active", '0,1,2,3,4,5,6,7,8,9');
            }
        }
        xhttp.open("GET", "https://official-joke-api.appspot.com/jokes/ten", true);
        xhttp.send();
    }
}
