import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private swal: SwalService
  ) { }

  get(api: string, callBack: (res:any)=> void) {
    this.http.get(`${environment.api_url}${api}`, 
    ).subscribe({
      next: (res: any) => {
        callBack(res);
       
      },
      error: (err: HttpErrorResponse) => {
        this.swal.callToast(err.message, "error");
        console.log(err);
      }
    })
  }

  post(api: string, body:any,callBack: (res:any)=> void) {
    this.http.post(`${environment.api_url}${api}`,body
    ).subscribe({
      next: (res: any) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this.swal.callToast(err.error.message, "error");
      }
    })
  }
}
