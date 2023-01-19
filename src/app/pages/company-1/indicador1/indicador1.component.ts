import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UploadFilesService} from '../services/upload-files.service';

@Component({
  selector: 'ngx-indicador1',
  templateUrl: './indicador1.component.html',
  styleUrls: ['./indicador1.component.scss'],
})
export class Indicador1Component implements OnInit {
  public cantMony: number;
  settings = {

    actions: false,
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      exchangeSubscriberID: {
        title: 'ExchangeSubscriberID',
        type: 'string',
      },
      policyNumber: {
        title: 'PolicyNumber',
        type: 'string',
      },
    },
    pager: {display: true, perPage: 15},

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private uploadFilesService: UploadFilesService) {
  }

  ngOnInit(): void {
    this.source = this.uploadFilesService.list.elementsOnlyCompanyBOB;
    this.cantMony = this.uploadFilesService.list.cantMony;
  }

}
