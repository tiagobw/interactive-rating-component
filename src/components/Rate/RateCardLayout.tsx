type RateCardLayoutProps = {
  children: React.ReactNode;
  classNameProps: string;
};

const RateCardLayout = ({ children, classNameProps }: RateCardLayoutProps) => {
  return (
    <article
      className={`flex flex-col justify-center w-[20.5rem] h-[27rem] p-6 m-0 bg-dark-grey 
                  rounded-xl shadow-xl ${classNameProps}
                  md:w-[28rem] md:h-[27.5rem] md:rounded-3xl
                `}
    >
      {children}
    </article>
  );
};

export default RateCardLayout;
