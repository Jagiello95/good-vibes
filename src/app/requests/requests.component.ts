import { Component, OnInit } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { CardContentComponent } from '../card-content/card-content.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CardContentComponent, MatCardModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent implements OnInit {
  public requests: any[] = [];

  constructor(private router: Router, private api: ApiService) {}

  public ngOnInit(): void {
    this.getRequests();
  }

  public redirect(request: any): void {
    console.log(1321);
    this.router.navigateByUrl(`requests/${request.id}`, { state: { request } });
  }

  public getRequests(): void {
    this.api.getRequests().subscribe((res: any[]) => {
      res.forEach((unit, index) => {
        unit.id = index;
      });
      this.requests = res;
    });
  }
}
