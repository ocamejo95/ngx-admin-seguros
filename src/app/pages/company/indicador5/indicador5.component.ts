import { Component, OnInit } from '@angular/core';
import {UploadFilesService} from '../services/upload-files.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-indicador5',
  templateUrl: './indicador5.component.html',
  styleUrls: ['./indicador5.component.scss'],
})
export class Indicador5Component implements OnInit {
  public cantMony: number;
  settings = {

    actions: false,
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      commissionDate: {
        title: 'CommissionDate',
        type: 'string',
      },
      policyNumber: {
        title: 'PolicyNumber',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'string',
      },
      ifPay: {
        title: 'IfPay',
        type: 'string',
      },
    },
    pager: {display: true, perPage: 15},
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.source = this.uploadFilesService.list.findElementsRepeatDate;
    this.cantMony = this.uploadFilesService.list.cantMony;
  }

}
