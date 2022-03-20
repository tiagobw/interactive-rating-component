import RateValue from './RateValue';

type RateValuesProps = {
  values: number[];
  selectedValue: number | null;
  handleSelectValue: (value: number) => void;
};

const RateValues = ({
  values,
  selectedValue,
  handleSelectValue,
}: RateValuesProps) => {
  return (
    <ul>
      {values.map((value) => (
        <RateValue
          value={value}
          selectedValue={selectedValue}
          handleSelectValue={handleSelectValue}
        />
      ))}
    </ul>
  );
};

export default RateValues;
