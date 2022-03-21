import { useState } from 'react';
import './App.css';
import RateCardAfterSubmit from './components/Rate/RateCardAfterSubmit';
import RateCardBeforeSubmit from './components/Rate/RateCardBeforeSubmit';

const values = [1, 2, 3, 4, 5];

function App() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <main className='flex justify-center items-center'>
      {isSubmitted ? (
        <RateCardAfterSubmit selectedValue={selectedValue} />
      ) : (
        <RateCardBeforeSubmit
          values={values}
          selectedValue={selectedValue}
          handleSelectValue={handleSelectValue}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
}

export default App;
