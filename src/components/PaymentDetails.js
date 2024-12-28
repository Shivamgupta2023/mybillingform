import React, { useEffect, useState } from 'react';
import { icons } from '../assets/icons';

const PaymentDetails = ({mainData, setMainData, errors, setErrors}) => {

    const {cardNumber, cardHolderName, expiry, cvv} = mainData;
    const {master, visa, amex} = icons

    const [cardType, setCardType] = useState('');

    useEffect(() => {
        setErrors({
            ...errors,
            ...(cardNumber.length > 0 && {cardNumber: ''}),
            ...((expiry.length > 0 && !checkValidExpiry(expiry)) && {expiry: ''}),
            ...(cvv.length > 0 && {cvv: ''}),
        });
    }, [cardNumber, cardHolderName, expiry, cvv]);

    const IndentifyCardType = (cardNumber) => {
        let cardType = '';
        if(cardNumber.startsWith('4')) {
            cardType = 'Visa';
        } else if(cardNumber.startsWith('5')) {
            cardType = 'MasterCard';
        } else if(cardNumber.startsWith('3')) {
            cardType = 'American Express';
        }
        return cardType;
    }

    const getCardTypeIcon = () => {
        switch (cardType) {
            case 'Visa':
                return visa;
            case 'MasterCard':
                return master;
            case 'American Express':
                return amex;
            default:
                return null;
        }
    };

    const checkValidExpiry = (value) => {
        if(value.length !== 6) return false;
        const currentYear = new Date().getFullYear();
        const inputYear = parseInt(value.slice(2));
        const inputMonth = parseInt(value.slice(0, 2));
        return (inputYear < currentYear || inputYear > currentYear + 10 || inputMonth < 1 || inputMonth > 12)
    }

    const handleCardNumberChange = (e) => {
        let value = e.target.value;
        let trimedValue = value.trim().replace(/\s+/g, '');
        if(value != "" && isNaN(parseInt(trimedValue)) || trimedValue.length > 16) {
            return;
        }
        setCardType(IndentifyCardType(trimedValue));
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
        if(value[value.length - 1] === '/' && value.length === 3) {
            value = value.slice(0, 1);
        }
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if(value.length > 6) {
            return
        }
        if(checkValidExpiry(value)) { 
            setErrors({
                ...errors,
                expiry: 'Please enter a valid expiry date'
            })
        } else {
            setErrors({
                ...errors,
                expiry: ''
            })
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

    const showExpiryValue = (expiry) => {
        let value = expiry;
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2); // Insert slash
        }
        return value;
    }

    return (
        <div className='mt-4 md:flex flex-row'>
            <div className='md:w-2/5'><h1>Payment Details</h1></div>
            <div className='m-2 w-full md:w-3/5'>
                <div className='flex flex-col'>
                    <label htmlFor='cardNumber'>Card Number</label>
                    <div className='relative'>
                    <input
                        className='w-full pl-10 p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='cardNumber'
                        placeholder='xxxx xxxx xxxx xxxx'
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                        {getCardTypeIcon() && (
                            <img
                                src={getCardTypeIcon()}
                                alt={'cardType'}
                                className='absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5'
                            />
                        )}
                    </div>
                    {errors.cardNumber && <p className='text-red-500'>{errors.cardNumber}</p>}
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
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100 w-32 md:w-72'
                            type='text'
                            id='cardNumber'
                            placeholder='MM/YYYY'
                            value={showExpiryValue(expiry)}
                            onChange={handleCardExpiryChange}
                        />
                        {errors.expiry && <p className='text-red-500'>{errors.expiry}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>CVV</label>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100 w-32 md:w-72'
                            type='text'
                            id='cardNumber'
                            placeholder='CVV'
                            value={cvv}
                            onChange={handleCardCvvChange}
                        />
                        {errors.cvv && <p className='text-red-500'>{errors.cvv}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;