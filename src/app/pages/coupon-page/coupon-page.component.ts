import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { Coupon } from '../../models/coupon';
import { UsersService } from '../../services/users.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-coupon-page',
  templateUrl: './coupon-page.component.html',
  styleUrls: ['./coupon-page.component.css']
})
export class CouponPageComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  private currentCoupon: Coupon;

  public downloadPdf(){
    let doc = new jsPDF();

    let specialElementHandlers = {
        '#editor': function(element, renderer){
            return true;
        }
    };

    let content = this.content.nativeElement;

    var img = new Image;
    img.crossOrigin = "";  // for demo as we are at different origin than image
    img.src = "/assets/brand/logo.png";
    doc.addImage(img,10, 10, 50, 25);

    doc.fromHTML(content.innerHTML, 15, 40, {
        'width': 190,
        'elementHandlers': specialElementHandlers
    });

    doc.save('cupon.pdf');

  }

  constructor(public usersService: UsersService){

  }

  ngOnInit() {
    window.scroll(0,0)

    var data = sessionStorage.getItem("siteUsername");
    var data1 = sessionStorage.getItem("couponName");
    this.usersService.getCoupon(data, data1).subscribe(usersResponse=>{
        console.log(usersResponse);
       this.currentCoupon = usersResponse;
    })
  }



}
