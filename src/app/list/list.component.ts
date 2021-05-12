import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    jokesList:string[][];

    constructor(private router:Router) {
        this.jokesList = this.loadData();
    }

    ngOnInit(): void {
        if(!localStorage.getItem("user"))
            this.router.navigate(['/login']);
            
    }

    loadData(){
        var list:string[][] = [];
        var l:string[] = [];
        var activeStr: string = localStorage.getItem("active") || '';
        var active:string[] = activeStr.split(',');
        for(var i = 0; i < active.length; i++){
            var obj = JSON.parse(localStorage.getItem(active[i])||'{}');
            if(!isNaN(+obj.id)){
                l = [active[i], obj.type, obj.setup, obj.punchline];
                list.push(l);
            }
        }
        return list;
        
    }

    delJoke(id:string){
        var activeStr: string = localStorage.getItem("active") || '';
        var active:string[] = activeStr.split(',');
        var target:number = 0;
        for(var i = 0; i < active.length; i++){
            if(active[i] == id){
                target = +i;
                break;
            }
        }
        active.splice(target, 1);
        localStorage.setItem("active", active.toString());
        this.router.navigate(['/login']);
        
    }

    editJoke(id:string){
        this.router.navigate(['/list', id]);
    }

}
