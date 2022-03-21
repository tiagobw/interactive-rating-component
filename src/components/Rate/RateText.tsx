type RateTextProps = {
  heading: string;
  paragraph: string;
};

const RateText = ({ heading, paragraph }: RateTextProps) => {
  return (
    <>
      <h1 className='text-white text-2xl mb-3'>{heading}</h1>
      <p className='text-light-grey'>{paragraph}</p>
    </>
  );
};

export default RateText;
