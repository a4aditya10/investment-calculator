import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-investment-chart',
  templateUrl: './investment-chart.component.html',
  styleUrls: ['./investment-chart.component.css']
})
export class InvestmentChartComponent implements OnChanges {
  @Input() chartData: any[] = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Invested Amount',
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255,193,7,0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        data: [],
        label: 'Total Value',
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76,175,80,0.3)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#fff',
        bodyColor: '#eee'
      }
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        title: {
          display: true,
          text: 'Year',
          color: '#ccc'
        }
      },
      y: {
        ticks: {
          color: '#ccc',
          callback: (value: any) => '₹' + value
        },
        title: {
          display: true,
          text: 'Amount (₹)',
          color: '#ccc'
        }
      }
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartData?.length) {
      this.lineChartData.labels = this.chartData.map(d => `Year ${d.year}`);
      this.lineChartData.datasets[0].data = this.chartData.map(d => d.invested);
      this.lineChartData.datasets[1].data = this.chartData.map(d => d.total);
    }
  }
}
