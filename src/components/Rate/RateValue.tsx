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
  return (
    <li
      className={`flex justify-center items-center text-sm 
                  h-10 w-10 p-3 rounded-full 
                  cursor-pointer hover:bg-orange hover:text-white
                  ${
                    selectedValue === value
                      ? 'bg-light-grey text-white'
                      : 'bg-medium-dark-grey text-light-grey'
                  }`}
      onClick={() => handleSelectValue(value)}
    >
      {value}
    </li>
  );
};

export default RateValue;
