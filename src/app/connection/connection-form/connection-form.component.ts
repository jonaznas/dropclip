import { Component, OnInit } from '@angular/core';
import { PeerService } from 'src/app/shared/peer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  public id: string;

  constructor(
    private peerService: PeerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  connect(): void {
    this.peerService.connect(+this.id);

    this.peerService.peerConnection.on('open', () => {
      this.router.navigateByUrl(this.id);
    });
  }
}
