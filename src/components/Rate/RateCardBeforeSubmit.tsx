import RateText from './RateText';
import RateValues from './RateValues';

import { ReactComponent as IconStar } from '../../images/icon-star.svg';
import RateCardLayout from './RateCardLayout';

const heading = 'How did we do?';
const paragraphs = [
  {
    id: 1,
    text: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
  },
];

type RateCardBeforeSubmitProps = {
  values: number[];
  selectedValue: number | null;
  handleSelectValue: (value: number) => void;
  handleSubmit: () => void;
};

const RateCardBeforeSubmit = ({
  values,
  selectedValue,
  handleSelectValue,
  handleSubmit,
}: RateCardBeforeSubmitProps) => {
  return (
    <RateCardLayout classNameProps='md:py-0 md:px-[2.25rem] md:justify-center'>
      <RateText classNameProps='' heading={heading} paragraphs={paragraphs} />
      <div className='-order-1 bg-medium-dark-grey self-start p-3 rounded-full mb-6 md:p-5'>
        <IconStar className='scale-95 md:scale-110' />
      </div>
      <RateValues
        values={values}
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      />
      <button
        disabled={!selectedValue}
        className={`bg-orange text-white disabled:bg-orange 
                  disabled:text-white hover:bg-white 
                  hover:text-orange text-[1rem] tracking-wider 
                  rounded-3xl py-2
                  md:py-3 md:mb-0
                  `}
        type='submit'
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </RateCardLayout>
  );
};

export default RateCardBeforeSubmit;
