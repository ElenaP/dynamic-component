import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.css']
})
export class LoadingOverlayComponent implements OnInit {
  get element() { return this.elementRef.nativeElement as HTMLElement; }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

}
