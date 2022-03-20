import RateText from './RateText';

import { ReactComponent as IllustrationThankYou } from '../../images/illustration-thank-you.svg';

const heading = 'Thank you!';
const paragraph =
  'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

type RateCardAfterSubmitProps = {
  selectedValue: number | null;
};

const RateCardAfterSubmit = ({ selectedValue }: RateCardAfterSubmitProps) => {
  return (
    <article>
      <RateText heading={heading} paragraph={paragraph} />
      <IllustrationThankYou />
      <p>{`You selected ${selectedValue} out of 5`}</p>
    </article>
  );
};

export default RateCardAfterSubmit;
