import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { LoadingOverlayDirective } from './loading-overlay.directive';

// Components
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@NgModule({

  declarations: [
    LoadingOverlayComponent,
    LoadingOverlayDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingOverlayComponent,
    LoadingOverlayDirective
  ]
})

export class LoadingOverlayModule { }
