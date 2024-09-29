import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardContentComponent } from './card-content/card-content.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    CardContentComponent,
    AppHeaderComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hackyeah2024';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.open();
    // this.api.fetch();
  }
}
