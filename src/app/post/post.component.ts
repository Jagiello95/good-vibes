import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import {
  afterNextRender,
  Component,
  inject,
  Injector,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private _injector = inject(Injector);
  public control: FormControl = new FormControl();

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(public api: ApiService) {}

  triggerResize() {
    // Wait for content to render, then trigger textarea resize.
    afterNextRender(
      () => {
        this.autosize?.resizeToFitContent(true);
      },
      {
        injector: this._injector,
      }
    );
  }

  public requestEnergy(): void {
    this.api.saveRequest(this.control.value);
  }
}
