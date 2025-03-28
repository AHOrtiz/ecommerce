import { Component, Input, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'shared-app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {

  @Input() stars: number = 0;
  @ViewChild('container', { static: true }) containerElement?: ElementRef<HTMLDivElement>;

  constructor(private renderer:Renderer2) {}

  private checkStars(): void {
    let isHalfStar: Boolean = false
    var arrayStars: Array<any> = new Array();

    isHalfStar = !Number.isInteger(this.stars)

    let newNumber = 0
    if (isHalfStar) {
      newNumber = parseInt(String(this.stars))
    } else {
      newNumber = this.stars
    }

    for (let i = 0; i < newNumber; i++) {
      arrayStars.push(this.createFillStar(Star.fill))
    }

    if (isHalfStar) {
      arrayStars.push(this.createFillStar(Star.half))
    }

    let lastStars = 5 - arrayStars.length

    if (lastStars > 0) {
      for (let i = 0; i < lastStars; i++) {
        arrayStars.push(this.createFillStar(Star.empty))
      }
    }

    for (let i = 0; i < arrayStars.length; i++) {
      this.renderer.appendChild(this.containerElement!.nativeElement, arrayStars[i]);
    }

    const spanElement = this.renderer.createElement('span');
    let textElement = this.renderer.createText(this.stars.toString());
    this.renderer.appendChild(spanElement, textElement);
    this.renderer.appendChild(this.containerElement!.nativeElement, spanElement);
  }

  private createFillStar(type: Star): any {
    const star = this.renderer.createElement('i');
    switch (type) {
      case 0:
        this.renderer.setAttribute(star, 'class', 'fa-regular fa-star')
        break
      case .5:
        this.renderer.setAttribute(star, 'class', 'fa-solid fa-star-half-stroke')
        break
      case 1:
        this.renderer.setAttribute(star, 'class', 'fa-solid fa-star')
        break
    }
    return star
  }

  ngOnInit(): void {
    if (this.stars > 5) this.stars = 5
    if (this.stars < .5) this.stars = 0
    this.checkStars()
  }
}

enum Star {
  empty = 0,
  half = .5,
  fill = 1,
}
