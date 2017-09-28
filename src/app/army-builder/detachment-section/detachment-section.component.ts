import {Component, Input, OnInit} from '@angular/core';
import {DetachmentSection} from "../detachment-section";
import {Unit} from "../unit";

@Component({
    selector: 'app-detachment-section',
    templateUrl: './detachment-section.component.html',
    styleUrls: ['./detachment-section.component.css']
})
export class DetachmentSectionComponent implements OnInit {
    @Input() section: DetachmentSection;
    @Input() unitOptions: Unit[];

    private displayedColumns = ['name', 'movement', 'bs', 'ws', 'strength', 'toughness', 'wounds','attacks', 'save', 'leadership'];

    private selectedUnit: Unit;

    constructor() {

    }

    ngOnInit() {

    }

    addUnit() {
        if(this.selectedUnit) {
            this.section.addUnit(this.selectedUnit);
        }
    }

}