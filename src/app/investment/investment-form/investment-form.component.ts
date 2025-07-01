import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css'],
})
export class InvestmentFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() calculated = new EventEmitter<any>();  // ✅ Only once

  allowOnlyNumbers(event: KeyboardEvent): void {
    const char = event.key;

    if (!/^[0-9.]$/.test(char)) {
      event.preventDefault();
    }

    const inputElement = event.target as HTMLInputElement;
    if (char === '.' && inputElement.value.includes('.')) {
      event.preventDefault();
    }
  }
  blockInvalidKeys(event: KeyboardEvent): void {
  const invalidChars = ['e', 'E', '+', '-'];
  if (invalidChars.includes(event.key)) {
    event.preventDefault();
  }
}
  calculate(form: NgForm) {
    if (form.valid) {
      const raw = form.value;
      const parsed = {
        initialInvestment: Number(raw.initialInvestment),
        annualInvestment: Number(raw.annualInvestment),
        expectedReturn: Number(raw.expectedReturn),
        duration: Number(raw.duration),
      };
      console.log("Form submitted:", parsed);
      this.calculated.emit(parsed);
    } else {
      console.warn("Form invalid!");
    }
  }
}
