type RateTextProps = {
  heading: string;
  paragraph: string;
  classNameProps: string;
};

const RateText = ({ heading, paragraph, classNameProps }: RateTextProps) => {
  return (
    <>
      <h1 className={`text-white text-2xl mb-3 ${classNameProps}`}>
        {heading}
      </h1>
      <p className={`text-light-grey ${classNameProps}`}>{paragraph}</p>
    </>
  );
};

export default RateText;
