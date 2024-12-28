import React, { useEffect } from 'react';

const AdditionalDetails = ({mainData, setMainData, errors, setErrors}) => {
    const {Country, Address1, Address2, City, State, Zip} = mainData;

    useEffect(() => {
        setErrors({
            ...errors,
            ...(Country.length > 0 && { Country: '' }),
            ...(Address1.length > 0 && { Address1: '' }),
            ...(City.length > 0 && { City: '' }),
            ...(State.length > 0 && { State: '' }),
            ...(Zip.length > 0 && { Zip: '' }),
        });
    }, [Country, Address1, City, State, Zip]);

    const handleChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        if (id === 'Zip') {
            if (isNaN(value))
                return
        } else if (!isNaN(parseInt(value))) {
            return
        }
        setMainData({
            ...mainData,
            [id]: value
        });
    };

    return (
        <div className='mt-2 md:flex flex-row'>
            <div className='w-full md:w-2/5'><h1>Additional Details</h1></div>
            <div className='m-2 w-full md:w-3/5'>
                <div className='flex flex-col'>
                    <label htmlFor='cardNumber'>Country/ Region</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='Country'
                        placeholder='United States'
                        value={Country}
                        onChange={handleChange}
                    />
                    {errors.Country && <p className='text-red-500'>{errors.Country}</p>}
                </div>
                <div className='mt-4 flex flex-col'>
                    <label htmlFor='cardNumber'>Address</label>
                    <input
                        className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                        type='text'
                        id='Address1'
                        placeholder='Street Address'
                        value={Address1}
                        onChange={handleChange}
                    />
                    {errors.Address1 && <p className='text-red-500'>{errors.Address1}</p>}
                    <div className='mt-4 flex flex-col'>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100'
                            type='text'
                            id='Address2'
                            placeholder='Apt, Suite, etc (optional)'
                            value={Address2}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='mt-4 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>City</label>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100 w-20 md:w-44'
                            type='text'
                            id='City'
                            placeholder='City'
                            value={City}
                            onChange={handleChange}
                        />
                        {errors.City && <p className='text-red-500'>{errors.City}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>State</label>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100 w-20 md:w-44'
                            type='text'
                            id='State'
                            placeholder='State'
                            value={State}
                            onChange={handleChange}
                        />
                        {errors.State && <p className='text-red-500'>{errors.State}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='cardNumber'>Zip</label>
                        <input
                            className='p-2 h-7 border border-gray-300 rounded-sm bg-slate-100 w-20 md:w-44'
                            type='text'
                            id='Zip'
                            placeholder='Zip'
                            value={Zip}
                            onChange={handleChange}
                        />
                        {errors.Zip && <p className='text-red-500'>{errors.Zip}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalDetails;