import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DotLottie } from '@lottiefiles/dotlottie-web';

@Component({
  selector: 'shared-fullscreen-loader',
  templateUrl: './fullscreen-loader.component.html',
  styleUrls: ['./fullscreen-loader.component.css']
})
export class FullscreenLoaderComponent implements AfterViewInit {
  // ViewChild properties
  @ViewChild('canvasLoader', { read: ElementRef }) loaderRef?: ElementRef<HTMLCanvasElement>;

  // Lifecycle
  ngAfterViewInit(): void {
    if (this.loaderRef) {
      console.log("Loader reference is available:", this.loaderRef.nativeElement);
    }

    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: this.loaderRef!.nativeElement,
      src: "https://lottie.host/0f7eec6c-1126-4ec7-80cf-9152314c7ba3/KRFTD4wQKR.lottie",
    });

    dotLottie.play();
  }
}
