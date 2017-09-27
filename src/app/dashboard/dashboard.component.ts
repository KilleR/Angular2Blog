import { Component, OnInit } from '@angular/core';
import {Army} from "../army";
import {Http} from "@angular/http";
import {ArmyList} from "../army-list";
import {TauArmyList} from "../tau-army-list";
import {FormControl} from "@angular/forms";
import {Detachment} from "../detachment";
import {DetachmentPatrol} from "../detachment-patrol";
import {DetachmentBattalion} from "../detachment-battalion";
import {DetachmentBrigade} from "../detachment-brigade";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private army: Army;
    private armyList: ArmyList;
    private armyLists: Array<ArmyList>;

    private detachmentOptions: Detachment[];

    // loading bar info
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    private selectedDetachment: Detachment;

    private armyFormControl: FormControl;

    constructor(private http:Http) {

        this.army = new Army();
        this.army.cost = 0;

        // create army lists
        this.armyLists = [
            new TauArmyList()
        ];

        // create detachment options
        this.detachmentOptions = [
            new DetachmentPatrol(),
            new DetachmentBattalion(),
            new DetachmentBrigade()
        ];

        this.armyFormControl = new FormControl();

        //
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

    addDetachment() {
        if(this.selectedDetachment) {
            this.army.Detachments.push(this.selectedDetachment);
        }
    }

}
