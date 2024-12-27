import React from 'react';

const AdditionalDetails = () => {
    return (
        <div className='mt-8 flex flex-row'>
            <div className='w-2/5'><h1>Additional Details</h1></div>
            <div className='w-3/5 m-2'>
                <div className='flex flex-col'>
                    <label htmlFor='cardNumber'>Country/ Region</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='Country'
                        placeholder='United States'
                        // value={cardNumber}
                        // onChange={handleCardNumberChange}
                    />
                </div>
                <div className='mt-4 flex flex-col'>
                    <label htmlFor='cardNumber'>Address</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='Address1'
                        placeholder='Street Address'
                        // value={cardHolderName}
                        // onChange={handleCardHolderNameChange}
                    />
                    <div className='mt-4 flex flex-col'>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='Address2'
                            placeholder='Apt, Suite, etc (optional)'
                        // value={cardHolderName}
                        // onChange={handleCardHolderNameChange}
                        />
                    </div>
                </div>
                <div className='mt-4 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>City</label>
                        <input
                            className='p-2 w-52 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='City'
                            placeholder='City'
                            // value={expiry}
                            // onChange={handleCardExpiryChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>State</label>
                        <input
                            className='p-2 w-52 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='State'
                            placeholder='State'
                            // value={cvv}
                            // onChange={handleCardCvvChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>Zip</label>
                        <input
                            className='p-2 w-52 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='Zip'
                            placeholder='123'
                            // value={cvv}
                            // onChange={handleCardCvvChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalDetails;