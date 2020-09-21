import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';

@Component({
  selector: 'app-connection-interface',
  templateUrl: './connection-interface.component.html',
  styleUrls: ['./connection-interface.component.scss']
})
export class ConnectionInterfaceComponent implements OnInit {

  public content;

  constructor(
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
  }

  transfer(): void {
    this.peerService.secondPeerConnection.send(this.content);
  }
}
