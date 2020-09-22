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
    if (this.content !== '') {
      this.peerService.peerConnection.send(this.content);
      this.content = '';
    }
  }
}
