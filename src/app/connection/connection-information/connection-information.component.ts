import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeerService } from 'src/app/shared/peer.service';

@Component({
  selector: 'app-connection-information',
  templateUrl: './connection-information.component.html',
  styleUrls: ['./connection-information.component.scss']
})
export class ConnectionInformationComponent implements OnInit, AfterViewInit {

  public id: number;

  @ViewChild('subText') subText: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private peerService: PeerService
  ) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit(): void {
    this.subText.nativeElement.classList.remove('text-gray');
    this.subText.nativeElement.classList.add('text-success');
  }
}
