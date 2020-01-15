import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  @Input() showSpinner;

  constructor() { }

  ngOnInit() {
  }

}
