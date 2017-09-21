import { Component } from '@angular/core';
@Component({
    selector: "app-template",
    templateUrl: "./template.component.html"
})
export class TemplateComponent {
    title = 'app';
    add1 = 0;
    add2 = 0;
    personne = {
        chien:{}
    };

    methode() {
        this.title = "title changed";
    }
    afficher(){
        console.log(this.personne);
    }
}