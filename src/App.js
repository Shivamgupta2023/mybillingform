import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/HeaderSection';
import PaymentDetails from './components/PaymentDetails';
import { useState } from 'react';
import EmailId from './components/EmailId';
import AdditionalDetails from './components/AdditionalDetails';

function App() {

  const [mainData, setMainData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvv: '',
    EmailId: ''
  });

  return (
    <div className="ml-24 mr-32 mt-8">
      <HeaderSection />
      <PaymentDetails
        mainData={mainData}
        setMainData={setMainData}
      />
      <hr className="my-6 border-gray-300"/>
      <EmailId
        mainData={mainData}
        setMainData={setMainData}
      />
      <hr className="my-6 border-gray-300"/>
      <AdditionalDetails/>
    </div>
  );
}

export default App;
