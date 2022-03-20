type RateTextProps = {
  heading: string;
  paragraph: string;
};

const RateText = ({ heading, paragraph }: RateTextProps) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </>
  );
};

export default RateText;
