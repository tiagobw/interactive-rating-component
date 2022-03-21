type RateCardLayoutProps = {
  children: React.ReactNode;
  classNameProps: string;
};

const RateCardLayout = ({ children, classNameProps }: RateCardLayoutProps) => {
  return (
    <article
      className={`flex flex-col w-[86%] p-6 m-0 bg-dark-grey rounded-xl shadow-xl ${classNameProps}`}
    >
      {children}
    </article>
  );
};

export default RateCardLayout;
