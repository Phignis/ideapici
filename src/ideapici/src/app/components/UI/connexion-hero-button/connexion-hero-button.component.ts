import { Component, ContentChild, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { SVGComponentComponent } from '../../icons/svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-connexion-hero-button',
  templateUrl: './connexion-hero-button.component.html',
  styleUrls: ['./connexion-hero-button.component.css']
})
export class ConnexionHeroButtonComponent {

  protected styleRoot = window.getComputedStyle(document.body);

  @ContentChild(SVGComponentComponent)
  private svgDisplayed! : SVGComponentComponent;

  protected elementsVisible : boolean = false;

  constructor() {}

  @HostListener("mouseenter")
  private onMouseEnter() {
    this.svgDisplayed.fillColor = this.styleRoot.getPropertyValue('--interactible-color');
  }

  @HostListener("mouseleave")
  private onMouseLeaving() {
    this.svgDisplayed.fillColor = this.styleRoot.getPropertyValue('--primary-color');
  }

  protected revealContent() {
    this.elementsVisible = !this.elementsVisible;
    this.svgDisplayed.height = this.elementsVisible ? "24px" : "48px";
    this.svgDisplayed.width = this.elementsVisible ? "24px" : "48px";
  }
}
