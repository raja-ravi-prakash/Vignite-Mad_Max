import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPlateComponent } from './main-plate/main-plate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PredictionComponent } from './main-plate/prediction/prediction.component';
import { AnalysisComponent } from './main-plate/analysis/analysis.component';
import { AreaProductionComponent } from './main-plate/analysis/area-production/area-production.component';
import { CropYearlyComponent } from './main-plate/analysis/crop-yearly/crop-yearly.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPlateComponent,
    PredictionComponent,
    AnalysisComponent,
    AreaProductionComponent,
    CropYearlyComponent,
  ],
  imports: [
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
