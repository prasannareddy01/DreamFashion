import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
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
