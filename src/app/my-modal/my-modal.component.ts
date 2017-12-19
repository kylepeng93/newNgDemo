import { Component, OnInit } from '@angular/core';
import { AlertComponent,ConfirmComponent } from '../components/dialog';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';

@Component({
  selector: 'app-my-modal',
  template: `<button type="button" value="click me" (click)="open()"></button>`,
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  confirmResult: boolean = null;
  constructor(private dialogService: DialogService) { }
  public open(){
    this.dialogService.addDialog(ConfirmComponent, {
      title: 'confirm',
      message: 'Bla bla confirm some action?'
  })
      .subscribe((isConfirmed) => {
          //Get dialog result
          alert(1);
      });
  }
  ngOnInit() {
  }

}
