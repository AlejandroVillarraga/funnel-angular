import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-sites-page',
  templateUrl: './sites-page.component.html',
  styleUrls: ['./sites-page.component.css']
})
export class SitesPageComponent implements OnInit {

  private userslist: User[] = [];
  private errorText: string;

  constructor(public usersService: UsersService){

  }

  ngOnInit() {

        window.scroll(0,0)
    var data = sessionStorage.getItem("categoryName");
    this.usersService.getSitesByCategory(data).subscribe(usersResponse=>{
       this.userslist = usersResponse;
      document.getElementById("loader").remove();
        if(this.userslist.length==0){
            this.errorText = "Lo sentimos !!!! No encontramos lugares registrados en la categoria "+data;
        }
        else{
            this.errorText = "";
        }
    })
  }

  saveSite(name: string, username: string){
    sessionStorage.setItem("siteName", name);
    sessionStorage.setItem("siteUsername", username);
  }

}

