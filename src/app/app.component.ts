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
  labelOpacity = signal<number>(0.6);
  disabledLabelOpacity = signal<number>(0.38);
  
  valueOpacity = signal<number>(0.87);
  disabledValueOpacity = signal<number>(0.38);

  constructor() {
    effect(() => {
      const opacity = this.labelOpacity();

      document.documentElement.style.setProperty('--mdc-outlined-text-field-label-text-color', `rgba(0, 0, 0, ${opacity})`);
    });

    effect(() => {
      const opacity = this.disabledLabelOpacity();

      document.documentElement.style.setProperty('--mdc-outlined-text-field-disabled-label-text-color', `rgba(0, 0, 0, ${opacity})`);
    });
    
    effect(() => {
      const opacity = this.valueOpacity();

      document.documentElement.style.setProperty('--mdc-outlined-text-field-input-text-color', `rgba(0, 0, 0, ${opacity})`);
      document.documentElement.style.setProperty('--mat-select-enabled-trigger-text-color', `rgba(0, 0, 0, ${opacity})`);
    });

    effect(() => {
      const opacity = this.disabledValueOpacity();

      document.documentElement.style.setProperty('--mdc-outlined-text-field-disabled-input-text-color', `rgba(0, 0, 0, ${opacity})`);
      document.documentElement.style.setProperty('--mat-select-disabled-trigger-text-color', `rgba(0, 0, 0, ${opacity})`);
    });
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
