import './App.css';
import HeaderSection from './components/HeaderSection';
import PaymentDetails from './components/PaymentDetails';
import { useEffect, useState } from 'react';
import EmailId from './components/EmailId';
import AdditionalDetails from './components/AdditionalDetails';

function App() {

  const [mainData, setMainData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvv: '',
    EmailId: '',
    Country: '',
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    Zip: ''
  });

  const [errors, setErrors] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvv: '',
    EmailId: '',
    Country: '',
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    Zip: ''
  })

  useEffect(() => {
    // Retrieve mainData from local storage when the component mounts
    const storedData = localStorage.getItem('mainData');
    if (storedData) {
        setMainData(JSON.parse(storedData));
    }
}, [setMainData]);

  const OnSubmit = () => {
    const { cardNumber, cardHolderName, expiry, cvv, EmailId, Country, Address1, Address2, City, State, Zip } = mainData;
    if (!cardNumber || !cardHolderName || !expiry || !cvv || !EmailId || !Country || !Address1 || !City || !State || !Zip) {
      setErrors({
        ...errors,
        cardNumber: cardNumber ? '' : 'Please enter a card number',
        cardHolderName: cardHolderName ? '' : 'Please enter card holder name',
        expiry: expiry ? '' : 'Please enter expiry date',
        cvv: cvv ? '' : 'Please enter cvv',
        EmailId: EmailId ? '' : 'Please enter email id',
        Country: Country ? '' : 'Please enter country',
        Address1: Address1 ? '' : 'Please enter address',
        City: City ? '' : 'Please enter city',
        State: State ? '' : 'Please enter state',
        Zip: Zip ? '' : 'Please enter zip'
      });
      return;
    }
    localStorage.setItem('mainData', JSON.stringify(mainData));
    alert('Data saved successfully');
  }

  return (
    <div className="w-screen p-10">
      <HeaderSection />
      <PaymentDetails
        mainData={mainData}
        setMainData={setMainData}
        errors={errors}
        setErrors={setErrors}
      />
      <hr className="my-6 border-gray-300" />
      <EmailId
        mainData={mainData}
        setMainData={setMainData}
        errors={errors}
        setErrors={setErrors}
      />
      <hr className="my-6 border-gray-300" />
      <AdditionalDetails
        mainData={mainData}
        setMainData={setMainData}
        errors={errors}
        setErrors={setErrors}
      />
      <div className='mt-4 flex flex-row justify-self-end'>
        <button
          className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={OnSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default App;
