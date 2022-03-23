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
                  h-[2.7rem] w-[2.7rem] p-3 rounded-full 
                  cursor-pointer hover:bg-orange hover:text-white
                  md:h-[3.5rem] md:w-[3.5rem]
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
