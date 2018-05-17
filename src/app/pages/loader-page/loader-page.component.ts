import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.css']
})
export class LoaderPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        window.scroll(0,0)
  }

}
