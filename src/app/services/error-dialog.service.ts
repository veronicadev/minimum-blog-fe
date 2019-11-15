import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorDialogService {
  opened: boolean = false;
  changeStatus = new Subject<{open: boolean, error: any}>();

  constructor() { }

  open(error:any){
    this.opened = true;
    this.changeStatus.next({
      open:this.opened,
      error: error
    });
  }

  close(){
    this.opened = false;
    this.changeStatus.next({
      open:this.opened,
      error: {}
    });
  }

}
