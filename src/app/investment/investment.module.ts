import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentHeaderComponent } from './investment-header/investment-header.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // if in AppModule
import { MatTableModule } from '@angular/material/table';
import { InvestmentChartComponent } from './investment-chart/investment-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    InvestmentFormComponent,
    InvestmentHeaderComponent,
    InvestmentListComponent,
    InvestmentChartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule
  ],
  exports: [InvestmentFormComponent,InvestmentHeaderComponent,InvestmentListComponent,
  InvestmentChartComponent
  ]
})
export class InvestmentModule { }
