import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-lop-soc-images',
    templateUrl: './lop-soc-images.component.html',
    styleUrls: ['./lop-soc-images.component.css']
})


export class LopSocImagesComponent implements OnInit {
    private images: Array<string> = [];
    private gridCols: number = 4;

    constructor() {
        for (let i = 0; i < 65; i++) {
            this.images.push(i + ".jpg")
        }
    }

    ngOnInit() {
        this.onResize()
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        let width = window.innerWidth;
        this.gridCols = Math.floor((width-100)/200);
    }
}
