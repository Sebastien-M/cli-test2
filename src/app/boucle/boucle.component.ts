import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {

  tab:string[] = ["ga","zo","bu"];
  hiddenForm = true;
  constructor() { }

  ngOnInit() {
  }

}