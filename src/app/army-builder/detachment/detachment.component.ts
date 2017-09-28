import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Detachment} from "../detachment";
import {ArmyList} from "../army-list";

@Component({
    selector: 'app-detachment',
    templateUrl: './detachment.component.html',
    styleUrls: ['./detachment.component.css']
})
export class DetachmentComponent implements OnInit {
    @Input() detachment: Detachment;
    @Input() armyList: ArmyList;

    constructor() {
    }

    ngOnInit() {
    }

}
