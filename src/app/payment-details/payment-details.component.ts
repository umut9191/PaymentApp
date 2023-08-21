import { PaymentDetail } from './../shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

constructor(public service:PaymentDetailService,private toaster:ToastrService) {

}
  ngOnInit(): void {
 this.service.refreshList()
  }
  populateForm(selectedPaymentDetail:PaymentDetail){
    //From içerisinde değişiklik yapınca listedeki veriler direk güncelleneceği için
    //burada gelen değerin kopyası alındı;
   this.service.formData= Object.assign({},selectedPaymentDetail);
  }

  onDelete(id:number){
    if(confirm("Are You Sure ?")){
      this.service.deletePaymentDetail(id).subscribe(
  {
    next:()=>{
    this.toaster.success("Deleted Successfully","Payment Detail Register");
    this.service.refreshList();
    }
  }
);
    }

  }
}
