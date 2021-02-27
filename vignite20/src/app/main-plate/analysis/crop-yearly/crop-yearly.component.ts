import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare const CanvasJS: any;

@Component({
  selector: 'app-crop-yearly',
  templateUrl: './crop-yearly.component.html',
  styleUrls: ['./crop-yearly.component.scss'],
})
export class CropYearlyComponent implements OnInit {
  constructor(private api: ApiService) {}

  dataRes: Array<Object> = [];
  chart: any = NaN;

  ngOnInit(): void {
    this.update();
  }

  update() {
    this.api.areaData().subscribe((s) => {
      let temp: any = s;
      this.dataRes = temp.result;
      this.chart = new CanvasJS.Chart('chartContainer', {
        title: {
          text: 'Area Wise Analysis',
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
    });
  }
}
