import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  url: string = environment.apiBaseUrl + "/PaymentDetail";
  list:PaymentDetail[] = [];
  formData :PaymentDetail= new PaymentDetail()
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get<PaymentDetail[]>(this.url)
      .subscribe(
        {
          next: res => {
            this.list = res;
          },
          error: er => {
            console.log(er);
          }
        }
      );
  }

  postPaymentDetail():Observable<PaymentDetail>{
  return  this.http.post<PaymentDetail>(this.url,this.formData);
  }
}
