type RateCardLayoutProps = {
  children: React.ReactNode;
};

const RateCardLayout = ({ children }: RateCardLayoutProps) => {
  return (
    <article className='flex flex-col w-[86%] p-6 m-0 bg-dark-grey rounded-xl shadow-xl'>
      {children}
    </article>
  );
};

export default RateCardLayout;
