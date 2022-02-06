import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
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
