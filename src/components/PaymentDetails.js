import React from 'react';

const PaymentDetails = ({mainData, setMainData}) => {

    const {cardNumber, cardHolderName, expiry, cvv} = mainData;

    const IndentifyCardType = (cardNumber) => {
        let cardType = '';
        if(cardNumber.startsWith('4')) {
            cardType = 'Visa';
        } else if(cardNumber.startsWith('5')) {
            cardType = 'MasterCard';
        } else if(cardNumber.startsWith('3')) {
            cardType = 'American Express';
        } else if(cardNumber.startsWith('6')) {
            cardType = 'Discover';
        }
        return cardType;
    }

    const handleCardNumberChange = (e) => {
        let value = e.target.value;
        let trimedValue = value.trim().replace(/\s+/g, '');
        if(isNaN(parseInt(trimedValue)) || trimedValue.length > 16) {
            return;
        }
        let stringValue = value.toString().replace(/(\d{4})(?=\d)/g, '$1 ')
        setMainData({
            ...mainData,
            cardNumber: stringValue
        });
    }

    const handleCardHolderNameChange = (e) => {
        setMainData({
            ...mainData,
            cardHolderName: e.target.value
        });
    }
    
    const handleCardExpiryChange = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if(value.length > 6) {
            return
        }
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2); // Insert slash
        }
        setMainData({
            ...mainData,
            expiry: value
        });
    };

    const handleCardCvvChange = (e) => {
        let value = e.target.value;
        if(isNaN(value) || value.length > 3) {
            return;
        }
        setMainData({
            ...mainData,
            cvv: e.target.value
        });
    }

    return (
        <div className='mt-8 flex flex-row'>
            <div className='w-2/5'><h1>Payment Details</h1></div>
            <div className='w-3/5 m-2'>
                <div className='flex flex-col'>
                    <label htmlFor='cardNumber'>Card Number</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='cardNumber'
                        placeholder='xxxx xxxx xxxx xxxx'
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                </div>
                <div className='mt-4 flex flex-col'>
                    <label htmlFor='cardNumber'>CardHolder Name</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='cardNumber'
                        placeholder='Full name on card'
                        value={cardHolderName}
                        onChange={handleCardHolderNameChange}
                    />
                </div>
                <div className='mt-4 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>Expiry</label>
                        <input
                            className='p-2 w-60 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='cardNumber'
                            placeholder='MM/YYYY'
                            value={expiry}
                            onChange={handleCardExpiryChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>CVV</label>
                        <input
                            className='p-2 w-60 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='cardNumber'
                            placeholder='CVV'
                            value={cvv}
                            onChange={handleCardCvvChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;