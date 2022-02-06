import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  
  count:number=0;
  incvalue()
  {
    this.count++;
  }
decvalue()
{
  this.count--;
}
  constructor() { }

  ngOnInit(): void {
  }

}
