import { useState } from 'react';
import './App.css';
import RateCardAfterSubmit from './components/Rate/RateCardAfterSubmit';
import RateCardBeforeSubmit from './components/Rate/RateCardBeforeSubmit';

function App() {
  const [isBeforeSubmit, setIsBeforeSubmit] = useState(true);

  return (
    <main>
      {isBeforeSubmit ? <RateCardBeforeSubmit /> : <RateCardAfterSubmit />}
    </main>
  );
}

export default App;
