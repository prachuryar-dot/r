// Loan Range Enum
export enum LoanRange {
  Min = 1000000,
  Max = 100000000,
  Step = 100000,
}

// Tenure Range Enum
export enum TenureRange {
  Min = 5,
  Max = 30,
  Step = 1,
}

// Interest Rate Range Enum
export enum InterestRateRange {
  Min = 0.5,
  Max = 20,
  Step = 0.01,
}

export interface CalculateEMIProps {
  onClose: () => void;
}
