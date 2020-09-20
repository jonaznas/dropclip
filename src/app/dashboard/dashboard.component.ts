import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public connectId;

  public localPeer;
  public localId;

  constructor(
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
    this.localId = this.peerService.generateId(1000, 9999);
    this.localPeer = this.peerService.create(this.localId);
    console.log(this.localPeer.id);

    this.localPeer.on('connection', conn => {
      console.log('got connection');
      console.log(conn.metadata);
    });
  }

  connect(): void {
    this.peerService.connect(this.localPeer, this.connectId);
  }
}
