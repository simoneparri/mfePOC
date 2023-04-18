import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
