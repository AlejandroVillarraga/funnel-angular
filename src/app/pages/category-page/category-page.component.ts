import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {


  private categoryList: Category[] = [];
  private userslist: User[] = [];

  constructor(public categoryService: CategoryService, public usersService: UsersService){

  }

  ngOnInit() {

    window.scroll(0,0)
    this.categoryService.getCategorys().subscribe(cateResponse=>{
       this.categoryList = cateResponse;
    })


    this.usersService.getSites().subscribe(usersResponse=>{
       this.userslist = usersResponse;
    })
  }



  saveCategory(name: string){
    sessionStorage.setItem("categoryName", name);
  }



}

