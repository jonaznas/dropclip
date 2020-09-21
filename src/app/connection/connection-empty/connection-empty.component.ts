import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';

@Component({
  selector: 'app-connection-empty',
  templateUrl: './connection-empty.component.html',
  styleUrls: ['./connection-empty.component.scss']
})
export class ConnectionEmptyComponent implements OnInit {

  public localId;

  constructor(
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
    this.peerService.create();

    this.localId = this.peerService.localId;
  }
}
