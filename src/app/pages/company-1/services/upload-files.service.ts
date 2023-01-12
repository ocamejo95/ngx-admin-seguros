import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  public list: any = [];
  status: NbComponentStatus = 'success';
  title = 'Done!';
  content = `Upload Files Successfully!`;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  index = 1;


  constructor(private http: HttpClient,
              private router: Router,
              private toastrService: NbToastrService) {
  }

  sendFiles(data1: any, data2: any, data3: any) {
    const url = '/sherpa/Ambetter';
    const formularioDatos = new FormData();
    formularioDatos.append('companyBOB', data1);
    formularioDatos.append('companyComm', data2);
    formularioDatos.append('sherpa', data3);

    return this.http.post(`${environment.API_URL_LOCAL}${url}`, formularioDatos).subscribe((response: any) => {
      this.list = response.message;
      this.router.navigate(['/pages/company-1/indicador-1']);
      this.showToast(this.status, this.title, this.content);
    });
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
