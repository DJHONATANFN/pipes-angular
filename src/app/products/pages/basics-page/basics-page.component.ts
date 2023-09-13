import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string ="jhonatan";
  public nameUpper: string ="JHONATAN";
  public fullName: string ="JhOnaTAn fLOreS";
  public customDate:Date= new Date();

}
