import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnChanges {
  @Input() initialInvestment!: number;
  @Input() annualInvestment!: number;
  @Input() expectedReturn!: number;
  @Input() duration!: number;
  @Input() calculatedTableData: any[] = [];

  investmentData: any[] = [];
  displayedColumns: string[] = ['year', 'invested', 'interest', 'total'];

  ngOnChanges(): void {
    this.calculateGrowth();
  }

  calculateGrowth() {
    this.investmentData = [];
    let total = this.initialInvestment;

    for (let year = 1; year <= this.duration; year++) {
      const interest = (total * this.expectedReturn) / 100;
      total += interest + this.annualInvestment;

      this.investmentData.push({
        year,
        invested: total - interest,
        interest,
        total,
      });
    }
  }
}
