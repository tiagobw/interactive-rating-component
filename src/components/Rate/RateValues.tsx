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
    <ul className='flex justify-between my-7'>
      {values.map((value) => (
        <RateValue
          key={value}
          value={value}
          selectedValue={selectedValue}
          handleSelectValue={handleSelectValue}
        />
      ))}
    </ul>
  );
};

export default RateValues;
