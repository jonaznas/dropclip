import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeerService } from 'src/app/shared/peer.service';
import { AnimateService } from 'src/app/shared/animate.service';

@Component({
  selector: 'app-connection-information',
  templateUrl: './connection-information.component.html',
  styleUrls: ['./connection-information.component.scss']
})
export class ConnectionInformationComponent implements OnInit, AfterViewInit {

  public label = '';

  @ViewChild('subText') subText: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animateService: AnimateService,
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
    const conn = this.peerService.peerConnection;
    const secConn = this.peerService.secondPeerConnection;

    if (secConn != null) {
      this.label = secConn.label;
      this.animateService.showConnectionControl();
    } else if (conn != null) {
      this.label = conn.label;
      this.animateService.showConnectionInterface();
    } else {
      this.router.navigateByUrl('');
      return;
    }
  }

  ngAfterViewInit(): void {
    this.subText.nativeElement.classList.remove('text-gray');
    this.subText.nativeElement.classList.add('text-success');
  }
}
