type RateTextProps = {
  heading: string;
  paragraphs: { id: number; text: string }[];
  classNameProps: string;
};

const RateText = ({ heading, paragraphs, classNameProps }: RateTextProps) => {
  return (
    <>
      <h1
        className={`text-white text-[1.75rem] mb-3 ${classNameProps} md:text-3xl md:mt-2`}
      >
        {heading}
      </h1>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.id} className={`text-light-grey ${classNameProps}`}>
          {paragraph.text}
        </p>
      ))}
    </>
  );
};

export default RateText;
