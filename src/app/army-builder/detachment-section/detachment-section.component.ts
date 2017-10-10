import {Component, Input, OnInit, Output} from '@angular/core';
import {DetachmentSection} from "../detachment-section";
import {Unit} from "../unit";
import {cloneDeep} from 'lodash';

@Component({
    selector: 'app-detachment-section',
    templateUrl: './detachment-section.component.html',
    styleUrls: ['./detachment-section.component.css']
})
export class DetachmentSectionComponent implements OnInit {
    @Input() section: DetachmentSection;
    @Input() unitOptions: Unit[];
    @Output() onDelete;

    private displayedColumns = ['count', 'name', 'movement', 'bs', 'ws', 'strength', 'toughness', 'wounds','attacks', 'save', 'leadership'];

    private selectedUnit: Unit;

    constructor() {

    }

    ngOnInit() {

    }

    addUnit() {
        if(this.selectedUnit) {
            const u = cloneDeep(this.selectedUnit);
            this.section.addUnit(u);
        }
    }

}