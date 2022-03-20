import { useState } from 'react';

import RateText from './RateText';
import RateValues from './RateValues';

import { ReactComponent as IconStar } from '../../images/icon-star.svg';

const values = [1, 2, 3, 4, 5];
const heading = 'How did we do?';
const paragraph =
  'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';

const RateCardBeforeSubmit = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <article>
      <RateText heading={heading} paragraph={paragraph} />
      <IconStar />
      <RateValues
        values={values}
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      />
      <button type='submit'>SUBMIT</button>
    </article>
  );
};

export default RateCardBeforeSubmit;
