const InputSlider = ({
  step,
  min,
  max,
  value,
  percentage,
  onChange,
}: {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  percentage: number;
}) => {
  return (
    <input
      type="range"
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gray-800 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
      style={{
        background: `linear-gradient(to right, #1f2937 ${percentage}%, #e5e7eb ${percentage}%)`,
      }}
    />
  );
};

export default InputSlider;
