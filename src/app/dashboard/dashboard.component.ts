import { Component, OnInit } from '@angular/core';
import {Army} from "../army";
import {Http} from "@angular/http";
import {ArmyList} from "../army-list";
import {TauArmyList} from "../tau-army-list";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private army: Army;
    private armyList: ArmyList;
    private armyLists: Array<ArmyList>;

    // loading bar info
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    private armyFormControl: FormControl;

    constructor(private http:Http) {

        this.army = new Army();
        this.army.cost = 0;
        this.armyLists = [
            new TauArmyList()
        ];
        console.log(this.armyLists)

        this.armyFormControl = new FormControl();
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
