import { useState } from 'react';
import './App.css';
import RateCardAfterSubmit from './components/Rate/RateCardAfterSubmit';
import RateCardBeforeSubmit from './components/Rate/RateCardBeforeSubmit';

const values = [1, 2, 3, 4, 5];

function App() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isBeforeSubmit, setIsBeforeSubmit] = useState(false);

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <main>
      {isBeforeSubmit ? (
        <RateCardBeforeSubmit
          values={values}
          selectedValue={selectedValue}
          handleSelectValue={handleSelectValue}
        />
      ) : (
        <RateCardAfterSubmit selectedValue={selectedValue} />
      )}
    </main>
  );
}

export default App;
