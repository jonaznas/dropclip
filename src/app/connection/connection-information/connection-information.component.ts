import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-information',
  templateUrl: './connection-information.component.html',
  styleUrls: ['./connection-information.component.scss']
})
export class ConnectionInformationComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
