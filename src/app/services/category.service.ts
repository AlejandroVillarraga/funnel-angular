import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {Category} from '.././models/category';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CategoryService extends APIService {

private resourceUrl: string = 'category/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http

  ) {
    super(config, authService, http);
  }


  getCategorys(): Observable<Category[]> {
    return this.get(this.resourceUrl+"getAll");
  }


}