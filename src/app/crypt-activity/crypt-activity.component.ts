import {Component, Input, OnInit} from '@angular/core';
import {CryptActivity} from "../crypt-activity";

@Component({
  selector: 'app-crypt-activity',
  templateUrl: './crypt-activity.component.html',
  styleUrls: ['./crypt-activity.component.css']
})
export class CryptActivityComponent implements OnInit {
  @Input() activity: CryptActivity;

  constructor() { }

  ngOnInit() {
  }

}
