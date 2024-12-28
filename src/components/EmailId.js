import React, { useEffect } from 'react';

const EmailId = ({mainData, setMainData, errors, setErrors}) => {

    const {EmailId} = mainData;

    useEffect(() => {
        setErrors({
            ...errors,
            ...((EmailId.length > 0 && validateEmail(EmailId)) && { EmailId: '' }),
        });
    }, [EmailId]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailIdChange = (e) => {
        let value = e.target.value;
        if(!validateEmail(value) && value.length > 0) {
            setErrors({
                ...errors,
                EmailId: 'Please enter a valid email id'
            });
        } else {
            setErrors({
                ...errors,
                EmailId: ''
            });
        }
        setMainData({
            ...mainData,
            EmailId: value
        });
    }

    return (
        <div className='mt-8 md:flex flex-row'>
            <div className='md:w-2/5'><h1>Email Address</h1></div>
            <div className='m-2 w-full md:w-3/5'>
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
                    {errors.EmailId && <p className='text-red-500'>{errors.EmailId}</p>}
                </div>
            </div>
        </div>
    );
};

export default EmailId;