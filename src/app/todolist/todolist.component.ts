import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  list:string[] = [];
  
  ngOnInit() {
  }

  ajouter(item){
    this.list.push(item);
  }
  supprimer(item){
    this.list.splice(this.list.indexOf(item),1);
    console.log(item);
  }

}
