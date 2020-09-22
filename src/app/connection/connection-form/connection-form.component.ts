import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  public id: string;

  constructor(
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
  }

  connect(): void {
    this.peerService.connect(+this.id);
  }
}
