import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnimateService } from 'src/app/shared/animate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewChecked {

  public connectionInterface = false;
  public connectionControl = false;

  constructor(
    public animateService: AnimateService,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngAfterViewChecked(): void {
    this.animateService.connectionInterfaceSubject.subscribe((show: boolean) => {
      this.connectionInterface = show;
    });

    this.animateService.connectionControlSubject.subscribe((show: boolean) => {
      this.connectionControl = show;
    });

    this.changeDetector.detectChanges();
  }
}
