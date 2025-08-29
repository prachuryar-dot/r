'use client';
import useMobileDetection from '@/hooks/useMobileDetection';
import { Button } from '../../atoms/buttons';
import { Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { formatNumberWithCommas } from '@/lib/utils/numberFormatter';
import iconPattem from '../../../assets/pattemestates-black-a-logo.svg';
import { cn } from '@/lib/utils/cn';
import InputSlider from './inputSlider';
import {
  CalculateEMIProps,
  LoanRange,
  TenureRange,
  InterestRateRange,
} from './calculateEMI.inteface';

const calculateEMI = (principal: number, rate: number, tenure: number) => {
  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenure * 12;

  if (monthlyRate === 0) {
    const emi = Math.round(principal / totalMonths);
    return {
      monthlyEMI: emi,
      totalAmountPay: principal,
      interestAmount: 0,
    };
  }

  const emi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1),
  );

  const totalPayable = Math.round(emi * totalMonths);
  const totalInterest = totalPayable - principal;

  return {
    monthlyEMI: emi,
    totalAmountPay: totalPayable,
    interestAmount: totalInterest,
  };
};

const CalculateEMI: React.FC<CalculateEMIProps> = ({ onClose }) => {
  // Device Detection
  const isMobile = useMobileDetection();

  // Loan States
  const [loanAmount, setLoanAmount] = useState<number>(LoanRange.Min);
  const [tenure, setTenure] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(12);

  const getSliderPercentage = (value: number, min: number, max: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const calculatedValues = useMemo(
    () => calculateEMI(loanAmount, interestRate, tenure),
    [loanAmount, interestRate, tenure],
  );

  const sliderPercentages = useMemo(
    () => ({
      loan: getSliderPercentage(loanAmount, LoanRange.Min, LoanRange.Max),
      tenure: getSliderPercentage(tenure, TenureRange.Min, TenureRange.Max),
      rate: getSliderPercentage(interestRate, InterestRateRange.Min, InterestRateRange.Max),
    }),
    [loanAmount, tenure, interestRate],
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleLoanAmount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= LoanRange.Min && value <= LoanRange.Max) {
      setLoanAmount(value);
    }
  }, []);

  const handleTenure = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= TenureRange.Min && value <= TenureRange.Max) {
      setTenure(value);
    }
  }, []);

  const handleInterestRate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= InterestRateRange.Min && value <= InterestRateRange.Max) {
      setInterestRate(value);
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleClose]);

  const closeButtonClasses = useMemo(
    () =>
      cn(
        'absolute right-4 top-4 z-30',
        'rounded-lg p-2',
        'bg-white/80 backdrop-blur-sm hover:bg-white',
        'text-accent-800 hover:text-accent-1000',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary-500',
        'shadow-sm hover:shadow-md',
      ),
    [],
  );

  return (
    <div className="relative w-full max-w-6xl rounded-b-2xl rounded-t-2xl bg-grey-50 pt-4 lg:p-10">
      <div className="relative mb-7 ml-4 h-6 w-28 lg:h-10 lg:w-32">
        <Image
          src={iconPattem}
          alt={'Patten logo'}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <button onClick={handleClose} className={closeButtonClasses} aria-label="Close modal">
        <X size={isMobile ? 18 : 22} />
      </button>

      <div className="mb-7 flex w-full flex-col gap-4 px-4">
        <h2 className="font-heading text-heading-lg font-bold text-gray-600 lg:text-heading-2xl">
          Calculate your Home loan EMI
        </h2>
        <div className="flex flex-col items-start gap-6 lg:flex-row-reverse lg:gap-12">
          <div className="grid w-full grid-cols-2 gap-5 rounded-xl bg-accent-1000 px-4 py-3 lg:flex-1 lg:grid-cols-3 lg:gap-2">
            <div className="flex flex-col items-center justify-center rounded-lg border border-primary-500 lg:w-fit lg:items-start lg:rounded-lg lg:px-4 lg:py-3">
              <h3 className="text-nowrap font-heading text-heading-md font-semibold text-accent-500 lg:text-heading-sm">
                {isMobile ? 'Monthly EMI' : 'Monthly Home Loan EMI'}
              </h3>
              <h4 className="text-nowrap p-1 font-sans text-subheading-md font-bold text-primary-500 lg:text-subheading-2xl">
                ₹ {formatNumberWithCommas(calculatedValues.monthlyEMI)}
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center lg:col-start-1 lg:px-4 lg:py-3">
              <h3 className="text-nowrap font-heading text-heading-md font-semibold text-accent-500 lg:text-heading-sm">
                Principal Amount
              </h3>
              <h4
                className={`text-nowrap font-sans text-subheading-md font-bold text-grey-50 lg:text-subheading-lg`}
              >
                ₹ {formatNumberWithCommas(loanAmount)}
              </h4>
            </div>
            <div className={`flex flex-col items-center justify-center lg:px-4 lg:py-3`}>
              <h3 className="text-nowrap font-heading text-heading-md font-semibold text-accent-500 lg:text-heading-sm">
                Interest Amount
              </h3>
              <h4
                className={`text-nowrap font-sans text-subheading-md font-bold text-grey-50 lg:text-subheading-lg`}
              >
                ₹ {formatNumberWithCommas(calculatedValues.interestAmount)}
              </h4>
            </div>
            <div className={`flex flex-col items-center justify-center lg:px-4 lg:py-3`}>
              <h3 className="text-nowrap font-heading text-heading-md font-semibold text-accent-500 lg:text-heading-sm">
                Total Amount Payable
              </h3>
              <h4
                className={`text-nowrap font-sans text-subheading-md font-bold text-grey-50 lg:text-subheading-lg`}
              >
                ₹ {formatNumberWithCommas(calculatedValues.totalAmountPay)}
              </h4>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 lg:flex-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-heading-md font-bold text-grey-600 lg:text-heading-lg">
                  Loan Amount
                </h3>
                <div className="flex rounded-lg border border-primary-200 lg:overflow-hidden">
                  <span className="flex w-10 items-center justify-center rounded-l-md bg-primary-100">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={loanAmount}
                    step={LoanRange.Step}
                    onChange={handleLoanAmount}
                    className="max-w-32 rounded-r-lg border-primary-50 bg-primary-50"
                  />
                </div>
              </div>

              <InputSlider
                min={LoanRange.Min}
                max={LoanRange.Max}
                step={LoanRange.Step}
                value={loanAmount}
                onChange={handleLoanAmount}
                percentage={sliderPercentages.loan}
              />
              <div className="flex w-full justify-between">
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  ₹ {LoanRange.Min / 100000} Lac
                </span>
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  ₹ {LoanRange.Max / 10000000} Cr
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-heading text-heading-md font-bold text-grey-600 lg:text-heading-lg">
                  Tenure (Years)
                </h3>
                <div className="flex rounded-lg border border-primary-200">
                  <input
                    type="number"
                    value={tenure}
                    onChange={handleTenure}
                    step={TenureRange.Step}
                    className="flex max-w-16 items-center justify-center rounded-lg border-primary-50 bg-primary-50"
                  />
                </div>
              </div>
              <InputSlider
                min={TenureRange.Min}
                max={TenureRange.Max}
                step={TenureRange.Step}
                value={tenure}
                onChange={handleTenure}
                percentage={sliderPercentages.tenure}
              />
              <div className="flex w-full justify-between">
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  {TenureRange.Min} year
                </span>
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  {TenureRange.Max} years
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-heading text-heading-md font-bold text-grey-600 lg:text-heading-lg">
                  Interest rate (% P.A.)
                </h3>
                <div className="flex rounded-lg border border-primary-200">
                  <span className="flex w-10 items-center justify-center rounded-l-md bg-primary-100">
                    %
                  </span>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={handleInterestRate}
                    step={InterestRateRange.Step}
                    className="max-w-20 rounded-r-lg border-primary-50 bg-primary-50"
                  />
                </div>
              </div>
              <InputSlider
                min={InterestRateRange.Min}
                max={InterestRateRange.Max}
                step={InterestRateRange.Step}
                value={interestRate}
                onChange={handleInterestRate}
                percentage={sliderPercentages.rate}
              />
              <div className="flex w-full justify-between">
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  {InterestRateRange.Min}%
                </span>
                <span className="font-sans text-label-xs font-semibold text-grey-400">
                  {InterestRateRange.Max}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 rounded-b-2xl bg-accent-50 px-4 py-3 lg:flex-row lg:justify-between lg:rounded-xl lg:p-5">
        <div className="flex flex-col justify-start gap-1">
          <h2 className="font-heading text-heading-sm font-bold text-grey-600 lg:text-heading-xl">
            Need more Information
          </h2>
          <h3 className="font-sans text-subheading-xs font-medium text-grey-600 lg:text-subheading-md">
            Talk to a expert
          </h3>
        </div>
        <div className="flex gap-4">
          <Button
            variant="secondary-outline"
            leftIcon={<Phone size={20} />}
            size={isMobile ? 'md' : 'lg'}
          >
            +91 76543 23451
          </Button>
          <Button size={isMobile ? 'md' : 'lg'}>Enquire now</Button>
        </div>
      </div>
    </div>
  );
};

export default CalculateEMI;
