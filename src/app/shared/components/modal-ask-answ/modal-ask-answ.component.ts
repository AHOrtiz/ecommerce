import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-modal-ask-answ',
  templateUrl: './modal-ask-answ.component.html',
  styleUrls: ['./modal-ask-answ.component.css']
})
export class ModalAskAnswComponent {
    //Inputs
    @Input() text:string ='¿Seguro quieres salir de Amazon?';
    //ouputs
    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();

    //Methods
    onConfirm() { this.confirm.emit(); }
    onCancel() { this.cancel.emit(); }
}

