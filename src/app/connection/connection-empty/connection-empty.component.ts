import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';
import { AnimateService } from 'src/app/shared/animate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-empty',
  templateUrl: './connection-empty.component.html',
  styleUrls: ['./connection-empty.component.scss']
})
export class ConnectionEmptyComponent implements OnInit {

  public localId;

  constructor(
    private router: Router,
    private peerService: PeerService,
    private animateService: AnimateService
  ) {
  }

  ngOnInit(): void {
    this.animateService.hideConnection();

    this.peerService.create();

    this.peerService.localPeer.on('connection', conn => {

      if (this.peerService.secondPeerConnection != null) {
        conn.close();
        return;
      }

      sessionStorage.setItem('secret', conn.metadata);
      this.peerService.secondPeerConnection = conn;
      this.router.navigateByUrl('c');
    });

    this.peerService.localPeer.on('close', () => {
      this.peerService.secondPeerConnection = null;
      this.animateService.hideConnection();
    });

    this.peerService.localPeer.on('disconnected', () => {
      this.peerService.secondPeerConnection = null;
      this.animateService.hideConnection();
    });

    this.localId = this.peerService.localId;
  }
}
