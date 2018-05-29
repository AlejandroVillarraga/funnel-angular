import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { TownService } from '../../services/town.service';
import { Town } from '../../models/town';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {


  private categoryList: Category[] = [];
  private userslist: User[] = [];
  private townList: Town[];
  public searchForm: FormGroup;
  private textTowns:string;

  constructor(public categoryService: CategoryService,
              public authService: AuthService,
              public usersService: UsersService,
              public townService: TownService,
                public router: Router){

  }

  ngOnInit() {

    window.scroll(0,0)

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

    this.categoryService.getCategorys().subscribe(cateResponse=>{
       this.categoryList = cateResponse;
      document.getElementById("loader").remove();
    })

     this.townService.getTowns().subscribe(townsResponse=>{
       this.townList = townsResponse;
      document.getElementById("loader3").remove();

    })


    this.usersService.getSites().subscribe(usersResponse=>{
       this.userslist = usersResponse;
      document.getElementById("loader2").remove();
    })



  }



  saveCategory(name: string){
    sessionStorage.setItem("categoryName", name);
  }

  searchSite() {
    var data = this.searchForm.get('inputSearch').value;
    sessionStorage.setItem("searchSite", data);

    this.router.navigate(['/searchSite']);


  }

  searchTown(townName: string){
    this.textTowns = townName;
    sessionStorage.setItem("searchTown", townName);
  }


  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/loader']);
      var that = this;
      setTimeout(function () {
          that.router.navigate(['/categorys']);
      }, 2000);
  }

}

