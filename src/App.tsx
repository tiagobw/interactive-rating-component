import { useState } from 'react';
import './App.css';
import RateCardAfterSubmit from './components/Rate/RateCardAfterSubmit';
import RateCardBeforeSubmit from './components/Rate/RateCardBeforeSubmit';

const values = [1, 2, 3, 4, 5];

function App() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <main>
      {isSubmitted ? (
        <RateCardAfterSubmit selectedValue={selectedValue} />
      ) : (
        <RateCardBeforeSubmit
          values={values}
          selectedValue={selectedValue}
          handleSelectValue={handleSelectValue}
        />
      )}
    </main>
  );
}

export default App;
