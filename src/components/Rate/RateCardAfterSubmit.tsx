import RateText from './RateText';

import { ReactComponent as IllustrationThankYou } from '../../images/illustration-thank-you.svg';
import RateCardLayout from './RateCardLayout';

const heading = 'Thank you!';
const paragraphs = [
  {
    id: 1,
    text: 'We appreciate you taking the time to give a rating.',
  },
  {
    id: 2,
    text: 'If you ever need more support, don’t hesitate to get in touch!',
  },
];

type RateCardAfterSubmitProps = {
  selectedValue: number | null;
};

const RateCardAfterSubmit = ({ selectedValue }: RateCardAfterSubmitProps) => {
  return (
    <RateCardLayout classNameProps='py-10 md:py-12 md:px-[1.75rem] md:items-center md:justify-center'>
      <RateText
        classNameProps='text-center'
        heading={heading}
        paragraphs={paragraphs}
      />
      <IllustrationThankYou className='-order-2 self-center' />
      <p
        className={`-order-1 self-center bg-medium-dark-grey 
                    text-orange py-2 px-4 my-7 rounded-3xl
                    md:px-5 md:mt-9
                  `}
      >{`You selected ${selectedValue} out of 5`}</p>
    </RateCardLayout>
  );
};

export default RateCardAfterSubmit;
