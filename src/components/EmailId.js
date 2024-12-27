import React from 'react';

const EmailId = ({mainData, setMainData}) => {

    const {EmailId} = mainData;

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailIdChange = (e) => {
        let value = e.target.value;
        // if(!validateEmail(value)) {
        //     return;
        // }
        setMainData({
            ...mainData,
            EmailId: value
        });
    }

    return (
        <div className='mt-8 flex flex-row'>
            <div className='w-2/5'><h1>Email Address</h1></div>
            <div className='w-3/5 m-2'>
                <div className='flex flex-col'>
                    <label htmlFor='cardNumber'>Email</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='EmailId'
                        placeholder='user@gmail.com'
                        value={EmailId}
                        onChange={handleEmailIdChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmailId;