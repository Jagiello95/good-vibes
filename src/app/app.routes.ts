import { Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { SendComponent } from './send/send.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', component: RequestsComponent },
  { path: 'requests/:id', component: SendComponent },
  { path: 'post', component: PostComponent },
];
