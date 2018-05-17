import { Component } from '@angular/core';

//Nuevos imports
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { TownService } from './services/town.service';
import { Town } from './models/town';
import { CategoryService } from './services/category.service';
import { Category } from './models/category';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public searchForm: FormGroup;
  private townList: Town[];
  private textTowns:string;
  private categoryList: Category[];

  constructor(
    public townService: TownService,
    public authService: AuthService,
    public categoryService: CategoryService,
    public router: Router
  ) {
    window.scroll(0,0)
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/categorys']);
    }

    this.searchForm = new FormGroup({
        inputSearch: new FormControl()
    });

     this.townService.getTowns().subscribe(townsResponse=>{
       this.townList = townsResponse;
    })


    var data1 = sessionStorage.getItem("searchTown");
    if(data1==null){
        this.textTowns = "Ciudades";
    }
    else{
        this.textTowns = data1;
    }



    this.categoryService.getCategorys().subscribe(cateResponse=>{
       this.categoryList = cateResponse;
    })



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
    window.location.reload();
    this.router.navigate(['/categorys']);
  }

  searchSite() {
    var data = this.searchForm.get('inputSearch').value;
    sessionStorage.setItem("searchSite", data);
    window.location.reload();
    this.router.navigate(['/searchSite']);
  }

  saveCategory(name: string){
    window.location.reload();
    sessionStorage.setItem("categoryName", name);
  }

}
