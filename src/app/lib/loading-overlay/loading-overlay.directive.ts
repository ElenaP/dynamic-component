import { Directive, Input, ViewContainerRef, ElementRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@Directive({
  selector: '[loadingOverlay]'
})
export class LoadingOverlayDirective {

  private component: ComponentRef<LoadingOverlayComponent>

  @Input()
  set loadingOverlay(show: boolean | string) {
    console.log('show', show);
    this.view.clear();
    show ? this.show() : this.hide();
  }

  constructor(
    private element: ElementRef,
    private view: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
    console.log(this.element);
    console.log(this.view);
  }

  private show() {
    const factory = this.resolver.resolveComponentFactory(LoadingOverlayComponent);
    this.component = this.view.createComponent(factory);
    setTimeout(() => {
      this.component.instance.element.style.top = `${this.element.nativeElement.offsetTop}px`;
      this.component.instance.element.style.left = `${this.element.nativeElement.offsetLeft}px`;
      this.component.instance.element.style.height = `${this.element.nativeElement.offsetHeight}px`;
      this.component.instance.element.style.width = `${this.element.nativeElement.offsetWidth}px`;
    });
  }

  private hide() {
    if(this.component) {
      this.component.destroy();
    }
  }

}
