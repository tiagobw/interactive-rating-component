import RateText from './RateText';

import { ReactComponent as IllustrationThankYou } from '../../images/illustration-thank-you.svg';
import RateCardLayout from './RateCardLayout';

const heading = 'Thank you!';
const paragraph =
  'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

type RateCardAfterSubmitProps = {
  selectedValue: number | null;
};

const RateCardAfterSubmit = ({ selectedValue }: RateCardAfterSubmitProps) => {
  return (
    <RateCardLayout>
      <RateText heading={heading} paragraph={paragraph} />
      <IllustrationThankYou />
      <p>{`You selected ${selectedValue} out of 5`}</p>
    </RateCardLayout>
  );
};

export default RateCardAfterSubmit;
