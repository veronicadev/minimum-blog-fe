import { Component, TemplateRef, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { ErrorDialogService } from './services/error-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('errorDialog') errorDialog: TemplateRef<any>;
  dialogRef: NbDialogRef<any>;

  constructor(private dialogService: NbDialogService,
    private errorDialogService: ErrorDialogService) { }

  ngAfterViewInit() { }
  ngOnInit() {
    this.errorDialogService.changeStatus.subscribe((result) => {
      const error = result.error;
      let message = error.error.message;
      if (!message) {
        message = error.message;
      }
      /*this.dialogService.open(this.errorDialog, {
        context: {
          content: message,
          statusText: error.statusText,
          status: error.status
        },
        closeOnBackdropClick: true
      });*/
    });
  }

}
