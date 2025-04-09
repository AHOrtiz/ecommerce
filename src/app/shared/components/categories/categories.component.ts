import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() title: string = '';
  @Input() categories:Array<Categories> = new Array();
  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  public isOpen: Boolean = false
  public toggle(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){

    }
  }


}

 export enum Categories{
     bedroom = "recamara",
     livingRoom = "sala",
     office = "oficina",
     kitchen = "cocina",
     outdoor = "exterior",
     decor = "decoracion"
}
