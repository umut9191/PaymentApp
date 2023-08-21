import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
 
 
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {
 
constructor(public service:PaymentDetailService,private toastr:ToastrService) {
}

onSubmit(form:NgForm){
  this.service.formSubmitted= true;
  if (form.valid) {
    if(this.service.formData.paymentDetailId==0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

}
insertRecord(form:NgForm){
  this.service.postPaymentDetail().subscribe({
    next: res=>{
      console.log(res);
      this.service.refreshList();
      this.service.resetForm(form);
      this.toastr.success('Inserted Successfully','Payment Detail Register');
    },
    error: err=>{
      console.log(err);
    }
  });
}
updateRecord(form:NgForm){
  this.service.putPaymentDetail().subscribe({
    next: res=>{
      console.log(res);
      this.service.refreshList();
      this.service.resetForm(form);
      this.toastr.info('Updated Successfully','Payment Detail Register');
    },
    error: err=>{
      console.log(err);
    }
  });
}
}
