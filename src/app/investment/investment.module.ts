import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentHeaderComponent } from './investment-header/investment-header.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';



@NgModule({
  declarations: [
    InvestmentFormComponent,
    InvestmentHeaderComponent,
    InvestmentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvestmentModule { }
