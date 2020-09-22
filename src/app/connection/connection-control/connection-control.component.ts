import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-control',
  templateUrl: './connection-control.component.html',
  styleUrls: ['./connection-control.component.scss']
})
export class ConnectionControlComponent implements OnInit {

  public publicData;
  public secretData;

  public showCopyAnimation = false;

  constructor(
    private router: Router,
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
    this.peerService.secondPeerConnection.on('data', data => {
      this.processData(data);
    });

    this.peerService.secondPeerConnection.on('close', () => {
      this.peerService.secondPeerConnection = null;
      this.peerService.peerConnection = null;
      this.router.navigateByUrl('');
    });
  }

  processData(data: string): void {
    this.publicData = data;
    this.secretData = data;
  }

  copy(): void {
    this.showCopyAnimation = true;

    setTimeout(() => {
      this.showCopyAnimation = false;
    }, 2000);
  }

  close(): void {
    this.peerService.secondPeerConnection.close();
  }
}
