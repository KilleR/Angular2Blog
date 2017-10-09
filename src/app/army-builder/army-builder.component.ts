import { Component, OnInit } from '@angular/core';
import {Army} from "./army";
import {ArmyList} from "./army-list";
import {Detachment} from "./detachment";
import {Http} from "@angular/http";
import {TauArmyList} from "./tau-army-list";
import {DetachmentPatrol} from "./detachment-patrol";
import {DetachmentBattalion} from "./detachment-battalion";
import {DetachmentBrigade} from "./detachment-brigade";
import {cloneDeep } from 'lodash';
import {Unit} from "./unit";
import {Model} from "./model";

@Component({
  selector: 'app-army-builder',
  templateUrl: './army-builder.component.html',
  styleUrls: ['./army-builder.component.css']
})
export class ArmyBuilderComponent implements OnInit {

    private army: Army;
    private armyLists: ArmyList[];

    private detachmentOptions: Detachment[];

    // loading bar info
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    private selectedDetachment: Detachment;

    constructor(private http: Http) {

        this.army = new Army();

        // fetch known army lists
        this.loadingBarShow = true;
        http.get("assets/tau.json")
            .subscribe(res => {
                this.loadingBarMode = 'query';
                this.parseArmyLists(res.json());
                this.loadingBarShow = false;
            });

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
            const d = cloneDeep(this.selectedDetachment);
            this.army.Detachments.push(d);
            // this.makeDetachmentOptions();
        }
    }

    parseArmyLists(armyJson): ArmyList[] {
        console.log(armyJson);
        let ArmyListsMap: Map<String, ArmyList> = new Map<String, ArmyList>();

        for(let i = 0; i < armyJson.length; i++) {
            let unitJson = armyJson[i];
            let u = new Unit();
            u.name = unitJson.name;
            u.role =  unitJson.role;
            u.power = unitJson.power;
            u.models = [];
            for(let j = 0; j < unitJson.models.length; j++) {
                let modelJson = unitJson.models[j];
                let m = new Model();
                m.name = modelJson.name;
                m.cost = modelJson.cost;
                m.min = modelJson.min;
                m.max = modelJson.max;
                m.count = modelJson.count;
                m.movement = modelJson.movement;
                m.ws = modelJson.ws;
                m.bs = modelJson.bs;
                m.strength = modelJson.strength;
                m.toughness = modelJson.toughness;
                m.wounds = modelJson.wounds;
                m.attacks = modelJson.attacks;
                m.leadership = modelJson.leadership;
                m.save = modelJson.save;

                u.models.push(m);
            }
            u.constructor();

            // add this unit to every appropriate keyword army
            for(let j=0; j < unitJson.keywords.length; j++) {
                let keyword = unitJson.keywords[j];

                let al: ArmyList = ArmyListsMap.get(keyword);
                if(typeof al == "undefined") {
                    al = new ArmyList();
                    al.Name = keyword;
                }

                al[unitJson.role].push(u);
                ArmyListsMap.set(keyword, al);
            }
        }

        console.log(ArmyListsMap);

        let retVal: ArmyList[] = [];
        let keys = Array.from(ArmyListsMap.keys());
        console.log(keys);
        for(let i = 0; i < keys.length; i++) {
            retVal.push(ArmyListsMap.get(keys[i]));
        }

        this.armyLists = retVal;
        return retVal;
    }
}
