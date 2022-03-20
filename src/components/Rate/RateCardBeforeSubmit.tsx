import RateText from './RateText';
import RateValues from './RateValues';

import { ReactComponent as IconStar } from '../../images/icon-star.svg';

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
    <article>
      <RateText heading={heading} paragraph={paragraph} />
      <IconStar />
      <RateValues
        values={values}
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      />
      <button type='submit' onClick={handleSubmit}>
        SUBMIT
      </button>
    </article>
  );
};

export default RateCardBeforeSubmit;
