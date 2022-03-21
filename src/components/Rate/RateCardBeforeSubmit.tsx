import RateText from './RateText';
import RateValues from './RateValues';

import { ReactComponent as IconStar } from '../../images/icon-star.svg';
import RateCardLayout from './RateCardLayout';

const heading = 'How did we do?';
const paragraph =
  'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';

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
    <RateCardLayout classNameProps=''>
      <RateText classNameProps='' heading={heading} paragraph={paragraph} />
      <div className='-order-1 bg-medium-dark-grey self-start p-3 rounded-full mb-6'>
        <IconStar className='scale-90' />
      </div>
      <RateValues
        values={values}
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      />
      <button
        className='bg-orange text-white hover:bg-white hover:text-orange text-[1rem] tracking-wider rounded-3xl py-2 mb-3'
        type='submit'
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </RateCardLayout>
  );
};

export default RateCardBeforeSubmit;
