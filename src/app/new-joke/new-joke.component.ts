import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css']
})
export class NewJokeComponent implements OnInit {

    type:string;
    setup:string;
    punchline:string;
    
    
  constructor(private router:Router) { 
    this.type = "";
    this.setup = "";
    this.punchline = "";
  }

  ngOnInit(): void {
      if(!localStorage.getItem("user"))
            this.router.navigate(['/login']);
  }
    
    AddJoke(type:string, setup:string, punchline:string){
        if(type.length < 3 || type.length > 20
          || setup.length < 3 || setup.length > 50
          || punchline.length < 3 || punchline.length > 50) alert("Nem megfelelő hosszúak az adatok");
        else{
            var idS = localStorage.getItem("BiggestID") || "";
            var id = +idS;
            id++;
            var str = '{"id":"'+id+'","type":"'+type+'","setup":"'+setup+'","punchline":"'+punchline+'"}';
            localStorage.setItem(id.toString(), str);
            localStorage.setItem("BiggestID", id.toString());
            var activeStr: string = localStorage.getItem("active") || '';
            var active:string[] = activeStr.split(',');
            active.push(id.toString());
            localStorage.setItem("active", active.toString()); 
            this.router.navigate(['/list']);
        }
    }
}
