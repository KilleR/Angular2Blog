import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {WaitingJob} from "./waiting-job";

@Component({
    selector: 'app-mephala-test',
    templateUrl: './mephala-test.component.html',
    styleUrls: ['./mephala-test.component.css']
})
export class MephalaTestComponent implements OnInit {
    serialNumber: string = 'S160Y52001170';
    tr69ParamField: string;
    deviceTypeField: string;

    waitingJobs: WaitingJob[];
    tr69Param: WaitingJob;

    ENV;

    constructor(private http : Http) {
        this.http.get('assets/env.json')
            .subscribe(res => {
                this.ENV = res.json();
            });
    }

    ngOnInit() {
    }

    getDeviceInfo() {
        let sn = this.serialNumber;
        console.log(sn);
        this.http.get('http://'+this.ENV.ACS_API_URL+'/api/device/'+sn+'/jobs')
            .subscribe(res => {
                this.waitingJobs = res.json().results;
                console.log(this.waitingJobs)
            })
    }

    getTr69Param() {
        let sn = this.serialNumber;
        let param = this.tr69ParamField;
        console.log(sn);
        this.http.get('http://'+this.ENV.ACS_API_URL+'/api/device/'+sn+'/info/'+param)
            .subscribe(res => {
                let resResults = res.json().results;
                this.tr69Param = resResults[resResults.length -1]
                console.log(this.tr69Param);
            })
    }

    getDeviceType() {
        let type = this.deviceTypeField;
        console.log(type);
        this.http.get('http://'+this.ENV.ACS_API_URL+'/api/devicetype/'+type)
            .subscribe(res => {
                let resResults = res.json().results;
                this.tr69Param = resResults[resResults.length -1];
                console.log(this.tr69Param);
            }, err =>{
                console.log("Error:", err);
            })
    }

}
