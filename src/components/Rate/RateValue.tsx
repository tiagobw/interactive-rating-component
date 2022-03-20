type RateValueProps = {
  value: number;
  selectedValue: number | null;
  handleSelectValue: (value: number) => void;
};

const RateValue = ({
  value,
  selectedValue,
  handleSelectValue,
}: RateValueProps) => {
  return <li onClick={() => handleSelectValue(value)}>{value}</li>;
};

export default RateValue;
