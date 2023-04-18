import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'shell';
  constructor(
    private router:Router
  ){}
  public goDashboard(){
    this.router.navigateByUrl('/dashboard/(route1:dashboard/mfe1//route2:dashboard/mfe2//route3:dashboard/mfe3//route4:dashboard/mfe4//route5:dashboard/mfe5)');
  }
}
