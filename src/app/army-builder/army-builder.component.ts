import { Component, OnInit } from '@angular/core';
import {Army} from "./army";
import {ArmyList} from "./army-list";
import {Detachment} from "./detachment";
import {Http} from "@angular/http";
import {TauArmyList} from "./tau-army-list";
import {DetachmentPatrol} from "./detachment-patrol";
import {DetachmentBattalion} from "./detachment-battalion";
import {DetachmentBrigade} from "./detachment-brigade";

@Component({
  selector: 'app-army-builder',
  templateUrl: './army-builder.component.html',
  styleUrls: ['./army-builder.component.css']
})
export class ArmyBuilderComponent implements OnInit {

    private army: Army;
    private armyLists: Array<ArmyList>;

    private detachmentOptions: Detachment[];

    // loading bar info
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    private selectedDetachment: Detachment;

    constructor() {

        this.army = new Army();

        // create army lists
        this.armyLists = [
            new TauArmyList()
        ];

        this.makeDetachmentOptions()

    }

    private makeDetachmentOptions() {
        // create detachment options
        this.detachmentOptions = [
            new DetachmentPatrol(),
            new DetachmentBattalion(),
            new DetachmentBrigade()
        ];
    }

    ngOnInit() {
    }

    addDetachment() {
        if(this.selectedDetachment) {
            this.army.Detachments.push(this.selectedDetachment.constructor());
            // this.makeDetachmentOptions();
        }
    }

}
