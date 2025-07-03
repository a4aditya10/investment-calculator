import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculatedData: any;
  calculatedTableData: any[] = [];

  onCalculate(formData: any) {
    this.calculatedData = {
      ...formData,
      initialInvestment: +formData.initialInvestment,
      annualInvestment: +formData.annualInvestment,
      expectedReturn: +formData.expectedReturn,
      duration: +formData.duration,
    };

    this.calculatedTableData = this.calculateTableData(
      this.calculatedData.initialInvestment,
      this.calculatedData.annualInvestment,
      this.calculatedData.expectedReturn,
      this.calculatedData.duration
    );
  }

  calculateTableData(initial: number, annual: number, returnRate: number, years: number) {
    const data = [];
    let total = initial;
    for (let year = 1; year <= years; year++) {
      total += annual;
      const interest = total * (returnRate / 100);
      total += interest;
      data.push({
        year,
        invested: initial + annual * year,
        interest: +interest.toFixed(2),
        total: +total.toFixed(2),
      });
    }
    return data;
  }
}


