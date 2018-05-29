import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { TownService } from '../../services/town.service';
import { Town } from '../../models/town';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Category } from '../../models/category';

@Component({
  selector: 'app-search-site-page',
  templateUrl: './search-site-page.component.html',
  styleUrls: ['./search-site-page.component.css']
})
export class SearchSitePageComponent implements OnInit {

  private userslist: User[] = [];
  private errorText: string;
  private townList: Town[];
  public searchForm: FormGroup;
  private textTowns:string;

  constructor(public usersService: UsersService,
              public townService: TownService,
              public router: Router){
  }

  ngOnInit() {;
    window.scroll(0,0);
    var data = sessionStorage.getItem("searchSite");
    var dataTown = sessionStorage.getItem("searchTown");
    this.usersService.searchSite(data, dataTown).subscribe(usersResponse=>{
       this.userslist = usersResponse;
      document.getElementById("loader").remove();
        if(this.userslist.length==0){
            this.errorText = "Lo sentimos !!!! No se encontro nada relacionado con "+data;
        }
        else{
            this.errorText = "";
        }
    })

    var data1 = sessionStorage.getItem("searchTown");
    if(data1==null){
        this.textTowns = "Ciudades";
    }
    else{
        this.textTowns = data1;
    }

    this.searchForm = new FormGroup({
        inputSearch: new FormControl()
    });

     this.townService.getTowns().subscribe(townsResponse=>{
       this.townList = townsResponse;
      document.getElementById("loader3").remove();

    })
    
  }

  saveSite(name: string, username: string){
    sessionStorage.setItem("siteName", name);
    sessionStorage.setItem("siteUsername", username);
  }

  searchSite() {
    var data = this.searchForm.get('inputSearch').value;
    sessionStorage.setItem("searchSite", data);

    this.router.navigate(['/loader']);
      var that = this;
      setTimeout(function () {
          that.router.navigate(['/searchSite']);
      }, 100);

  }


  searchTown(townName: string){
    this.textTowns = townName;
    sessionStorage.setItem("searchTown", townName);
  }

}

