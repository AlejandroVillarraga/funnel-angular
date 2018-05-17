import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Coupon } from '../../models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-profile',
  templateUrl: './site-profile.component.html',
  styleUrls: ['./site-profile.component.css']
})
export class SiteProfileComponent implements OnInit {

  private currentUser: User;
  private listCoupons: Coupon[];



  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit() {
        window.scroll(0,0)
    var data = sessionStorage.getItem("siteName");
    this.usersService.getSite(data).subscribe(usersResponse=>{
       console.log(usersResponse);
       this.currentUser = usersResponse;
    })

    var data1 = sessionStorage.getItem("siteUsername");
    this.usersService.getCouponsByUsernameSite(data1).subscribe(usersResponse=>{
        console.log(usersResponse);
       this.listCoupons = usersResponse;
    })

  }

  saveCouponName(name: string){
    this.router.navigate(['coupon']);
    sessionStorage.setItem("couponName", name);
  }



}
