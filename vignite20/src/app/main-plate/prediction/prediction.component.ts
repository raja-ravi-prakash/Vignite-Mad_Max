import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
declare const CanvasJS: any;

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss'],
})
export class PredictionComponent implements OnInit {
  area_code = 0;
  year = 0;
  item_code = 0;
  areas = [];

  constructor(private api: ApiService) {}

  compute() {
    this.api
      .predict({ data: [this.area_code, this.year, this.item_code] })
      .subscribe((s) => {
        let temp: any = s;
        console.log(temp.result);
        alert(temp.result.toString());
      });
  }

  ngOnInit(): void {
    this.api.areas().subscribe((s) => {
      let temp: any = s;
      this.areas = temp.result;
    });
  }
}
