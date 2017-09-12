import { Component, OnInit } from '@angular/core';
import {Army} from "../army";
import {Http} from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private army: Army;
    private armyList: object;

    // loading bar info
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    constructor(private http:Http) {
        this.army = new Army();
        this.army.cost = 0;
    }

    ngOnInit() {
    }

    getArmyList(armyName) {
        this.loadingBarMode = 'indeterminate';
        this.loadingBarShow = true;
        this.http.get('assets/'+armyName+'.json')
            .subscribe(res => {
                this.armyList = res.json();
                this.loadingBarShow = false;
            })
    }

}
