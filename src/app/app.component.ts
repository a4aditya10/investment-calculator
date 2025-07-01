import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'investment calculator';
  calculatedData: any;

onCalculate(data: any) {
  this.calculatedData = {
    initialInvestment: +data.initialInvestment,
    annualInvestment: +data.annualInvestment,
    expectedReturn: +data.expectedReturn,
    duration: +data.duration,
  };
  console.log("Data passed to List:", this.calculatedData);
}


}
