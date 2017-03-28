import { Component, OnInit } from '@angular/core';

import { Ng2TrainService } from '../service/ng2-train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myInnerHtml: string;

  constructor(private ng2trainService: Ng2TrainService) { }

  ngOnInit() {
    this.ng2trainService.getInnerHtml().subscribe((data) => {
      console.log(JSON.stringify(data, null, 2));
      this.myInnerHtml = data.myInnerHtml;
    });
  }

}
