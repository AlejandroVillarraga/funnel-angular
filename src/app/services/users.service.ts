import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {User} from '.././models/user';
import {Person} from '.././models/person';
import {Observable} from 'rxjs/Observable';
import {Coupon} from '.././models/coupon';

@Injectable()
export class UsersService extends APIService {

private resourceUrl: string = 'user/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http

  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('person/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  signUp(name: string, username: string, email:string, celphone:string, password:string) {
    return this.post("person/signup", new Person(name, username, email, celphone, password));
  }


  getSites(): Observable<User[]> {
    return this.get(this.resourceUrl+"getAll");
  }

  getSitesByCategory(category): Observable<User[]> {
    return this.get(this.resourceUrl+"byCategory/"+category);
  }

  getSite(siteName): Observable<User> {
    return this.get(this.resourceUrl+"getsite/"+siteName)
  }

  getCouponsByUsernameSite(siteUsername): Observable<Coupon[]> {
    return this.get(this.resourceUrl+"getCoupons/"+siteUsername)
  }

  getCoupon(siteUsername, couponName): Observable<Coupon> {
    return this.get(this.resourceUrl+"getCoupon/"+siteUsername+"/"+couponName)
  }

  searchSite(siteName, townName): Observable<User[]> {

    return this.get(this.resourceUrl+"search/"+siteName+"/"+townName);
  }


}