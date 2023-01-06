import {Component, OnInit} from '@angular/core';
import {UploadFilesService} from '../../company-1/services/upload-files.service';

@Component({
  selector: 'ngx-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  public file1: any;
  public file2: any;
  public file3: any;

  constructor(private uploadFilesService: UploadFilesService) {
  }

  ngOnInit(): void {
    this.submitFiles();
  }

  catchFile1(event: any) {
    this.file1 = event.target.files[0];
  }

  catchFile2(event: any) {
    this.file2 = event.target.files[0];
  }

  catchFile3(event: any) {
    this.file3 = event.target.files[0];
  }

  submitFiles() {
    this.uploadFilesService.sendFiles(this.file1, this.file2, this.file3);
  }

}
