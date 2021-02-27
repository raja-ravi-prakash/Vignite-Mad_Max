import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionComponent } from './main-plate/prediction/prediction.component';
import { AreaProductionComponent } from './main-plate/analysis/area-production/area-production.component';
import { CropYearlyComponent } from './main-plate/analysis/crop-yearly/crop-yearly.component';

const routes: Routes = [
  { path: 'prediction', component: PredictionComponent },
  { path: 'crop-wise-analysis', component: CropYearlyComponent },
  { path: 'area-prod-analysis', component: AreaProductionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
