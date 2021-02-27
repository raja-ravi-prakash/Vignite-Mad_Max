import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare const CanvasJS: any;

@Component({
  selector: 'app-area-production',
  templateUrl: './area-production.component.html',
  styleUrls: ['./area-production.component.scss'],
})
export class AreaProductionComponent implements OnInit {
  constructor(private api: ApiService) {}

  dataRes: Array<Object> = [];
  chart: any = NaN;

  ngOnInit(): void {

    this.getData();
  }

  getData() {
    this.api.yearsData().subscribe(s=>{
      let temp:any = s;
      this.dataRes = temp.result;
      console.log(this.dataRes)
      this.chart = new CanvasJS.Chart('chartContainer', {
        title: {
          text: 'Year & Production',
        },
  
        animationEnabled: true,
        exportEnabled: true,
  
        axisX: {
          title: 'X',
        },
        axisY: {
          title: 'Y',
        },
        data: [
          {
            type: 'area',
            dataPoints: this.dataRes,
          },
        ],
      });
      this.chart.render();
    })
  }
}
