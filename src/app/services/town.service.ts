import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {Town} from '.././models/town';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TownService extends APIService {

private resourceUrl: string = 'town/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http

  ) {
    super(config, authService, http);
  }


  getTowns(): Observable<Town[]> {
    return this.get(this.resourceUrl+"getAll");
  }


}