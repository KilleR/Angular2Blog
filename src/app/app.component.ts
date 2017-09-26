import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Post} from "./post";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {


    constructor() {

    }


    title = 'Angular 2 Dev Blog!';

    ngOnInit() {
    }
}
