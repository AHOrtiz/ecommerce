import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

   constructor(private router: Router){}

  navigateToHelp(){
    this.router.navigate(['inicio/help']);
  }

}
