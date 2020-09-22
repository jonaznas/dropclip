import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';
import AES from 'crypto-js/aes';

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
      const hash = AES.encrypt(this.content, sessionStorage.getItem('secret')).toString();

      this.peerService.peerConnection.send(hash);
      this.content = '';
    }
  }
}
