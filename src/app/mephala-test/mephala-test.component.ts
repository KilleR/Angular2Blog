import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {WaitingJob} from "./waiting-job";
import {HttpHeaders} from "@angular/common/http";

@Component({
    selector: 'app-mephala-test',
    templateUrl: './mephala-test.component.html',
    styleUrls: ['./mephala-test.component.css']
})
export class MephalaTestComponent implements OnInit {
    serialNumber: string = 'S162E18032581';
    tr69ParamField: string;
    deviceTypeField: string;
    deviceTypeParamConn: string;
    deviceTypeParamName: string;
    deviceTypeParamValue: string;

    waitingJobs: WaitingJob[];
    tr69Param: WaitingJob;

    ENV;

    deviceTypes = [
        {name: "T10-B", value: 70},
        {name: "AMG1302-T11C", value: 60},
    ];

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
            }, err =>{
                console.log(err);
            })
    }

    getTr69Param() {
        let sn = this.serialNumber;
        let param = this.tr69ParamField;
        console.log(sn);
        this.http.get('http://'+this.ENV.ACS_API_URL+'/api/device/'+sn+'/info/'+param)
            .subscribe(res => {
                let resResults = res.json().results;
                this.tr69Param = resResults[resResults.length -1];
                console.log(this.tr69Param);
            }, err =>{
                console.log(err);
            })
    }

    getDeviceType() {
        let type = this.deviceTypeField;
        this.http.get('http://'+this.ENV.ACS_API_URL+'/api/devicetype/'+type)
            .subscribe(res => {
                let resResults = res.json().results;
                this.tr69Param = resResults[resResults.length -1];
                console.log(this.tr69Param);
            }, err =>{
                console.log(err);
            })
    }

    setDeviceParam() {
        let type = this.deviceTypeField;
        let connType = this.deviceTypeParamConn;
        let name = this.deviceTypeParamName;
        let value = this.deviceTypeParamValue;

        let body = new URLSearchParams();
        body.set("connectiontype", connType);

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http.post('http://'+this.ENV.ACS_API_URL+'/api/devicetype/'+type+'/set', {search: body})
            .subscribe(res => {
                let resResults = res.json();
                this.tr69Param = resResults[resResults.length -1];
                console.log(this.tr69Param);
            }, err =>{
                console.log(err);
            })
    }

}
