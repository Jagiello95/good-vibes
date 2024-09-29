import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CardContentComponent } from '../card-content/card-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    CardContentComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgCircleProgressModule,
    CommonModule,
  ],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss',
})
export class SendComponent implements OnInit, AfterViewInit {
  public request: any;
  public shouldAnimate: boolean = false;

  public get energyCounter(): number {
    return this.request?.energyCounter <= 100
      ? this.request.energyCounter
      : 100;
  }
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    this.route.params.subscribe((data) => console.log(data));
  }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => {
        this.request = res.request;
      });
  }

  public ngAfterViewInit(): void {
    this.shouldAnimate = false;
  }

  public addEnergy(request: any): void {
    this.request.energyCounter = this.request.energyCounter + 1;

    this.api.giveEnergy(request).subscribe({
      next: () => {
        console.log(123);
        this.cdr.detectChanges();
      },
      error: () =>
        (this.request.energyCounter = this.request.energyCounter - 1),
    });
  }
}
