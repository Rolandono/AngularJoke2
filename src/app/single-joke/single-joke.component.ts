import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-joke',
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.css']
})

export class SingleJokeComponent implements OnInit {
    
    public id:string;
    public type:string;
    public setup:string;
    public punchline:string;
    
  constructor(private route: ActivatedRoute, private router: Router) {
      this.id = "";
      this.type = "";
      this.setup = "";
      this.punchline = "";
  }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id') || "";
      var joke = JSON.parse(localStorage.getItem(this.id || "") || "");
      this.type = joke.type;
      this.setup = joke.setup;
      this.punchline = joke.punchline;
  }

    UpdateJoke(id:string, type:string, setup:string, punchline:string){
        var str = '{"id":"'+id+'","type":"'+type+'","setup":"'+setup+'","punchline":"'+punchline+'"}';
        console.log(str);
        localStorage.setItem(id, str); 
        this.router.navigate(['/list']);
    }

}
