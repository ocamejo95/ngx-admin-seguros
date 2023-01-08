import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UploadFilesService} from '../services/upload-files.service';

@Component({
  selector: 'ngx-indicador3',
  templateUrl: './indicador3.component.html',
  styleUrls: ['./indicador3.component.scss'],
})
export class Indicador3Component implements OnInit {
  public cantMony: number;
  settings = {

    actions: false,
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      ffm_subscriber_id: {
        title: 'Ffm_subscriber_id',
        type: 'string',
      },
      transformerID: {
        title: 'TransformerID',
        type: 'string',
      },
    },
    pager: { display: true, perPage: 15},
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private uploadFilesService: UploadFilesService) {
    this.source = uploadFilesService.list.elementsOnlySherpa;
    this.cantMony = this.uploadFilesService.list.cantMony;
  }

  ngOnInit(): void {
  }

}
