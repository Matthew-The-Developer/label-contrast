import { Component, effect, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
        appearance: 'outline',
        subscriptSizing: 'dynamic',
      }
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  opacity = signal<number>(0.6);
  effectDisabled = signal<boolean>(false);

  constructor() {
    effect(() => {
      const opacity = this.opacity();
      const effectDisabled = this.effectDisabled();

      document.documentElement.style.setProperty('--mdc-outlined-text-field-label-text-color', `rgba(0, 0, 0, ${opacity})`);

      if (effectDisabled){
        document.documentElement.style.setProperty('--mdc-outlined-text-field-disabled-label-text-color', `rgba(0, 0, 0, ${opacity})`);
      } else {
        document.documentElement.style.setProperty('--mdc-outlined-text-field-disabled-label-text-color', 'rgba(26, 27, 31, 0.38)');
      }
    });
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
