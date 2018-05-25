import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Coupon } from '../../models/coupon';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-site-profile',
  templateUrl: './site-profile.component.html',
  styleUrls: ['./site-profile.component.css']
})
export class SiteProfileComponent implements OnInit {

  private currentUser: User;
  private listCoupons: Coupon[];



  constructor(public usersService: UsersService,
              public authService: AuthService,
              public router: Router) { }

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
      document.getElementById("loader").remove();

    })

  }

  saveCouponName(name: string){
    if(this.isLoggedIn()){
        this.router.navigate(['coupon']);
    }
    else{
        this.router.navigate(['signin']);
    }
    sessionStorage.setItem("couponName", name);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }



}
