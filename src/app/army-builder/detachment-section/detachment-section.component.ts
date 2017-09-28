import {Component, Input, OnInit} from '@angular/core';
import {DetachmentSection} from "../detachment-section";

@Component({
    selector: 'app-detachment-section',
    templateUrl: './detachment-section.component.html',
    styleUrls: ['./detachment-section.component.css']
})
export class DetachmentSectionComponent implements OnInit {
    @Input() section: DetachmentSection;

    constructor() {
    }

    ngOnInit() {
    }

}
