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
    <RateCardLayout classNameProps='py-10'>
      <RateText classNameProps='text-center' heading={heading} paragraph={paragraph} />
      <IllustrationThankYou className='-order-2 self-center' />
      <p className='-order-1 self-center bg-medium-dark-grey text-orange py-2 px-4 my-7 rounded-3xl'>{`You selected ${selectedValue} out of 5`}</p>
    </RateCardLayout>
  );
};

export default RateCardAfterSubmit;
