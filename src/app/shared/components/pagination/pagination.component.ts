import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaginationSettings } from './../../../models/post';

@Component({
  selector: 'mb-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

  @Input() paginationSettings: IPaginationSettings;
  @Output() changePage = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  private onPaginationChange(page:number){
    this.changePage.emit(page+1)
  }

  private generateRowIndexes(){
    let indexes = [];
    for (let i = 0; i < this.paginationSettings.totalPages; i++) {
      indexes.push(i);
    }
    return indexes;
  }

}
