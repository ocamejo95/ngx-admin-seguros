import {Component, OnInit} from '@angular/core';
import {UploadFilesService} from '../../company-1/services/upload-files.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  public file1: File;
  public file2: File;
  public file3: File;
  invalid = false;

  public uploadFilesForm = this.formBuilder.group({
    fil1: ['', Validators.required],
    fil2: ['', Validators.required],
    fil3: ['', Validators.required],
  });


  constructor(private uploadFilesService: UploadFilesService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.submitFiles();
  }

  catchFile1(event: any) {
    this.file1 = event.target.files[0];
    this.invalid = this.file1.type !== 'text/csv';

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
