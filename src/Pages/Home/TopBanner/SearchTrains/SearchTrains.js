import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { DayPicker } from 'react-day-picker';

const SearchTrains = () => {
    //this is for open close the day picker
    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] lg:mt-10 mx-auto'>
            <div className=''>
                <div>
                    <h1>From</h1>
                    <input className='input h-8 rounded-md input-bordered input-info w-full' placeholder='From Station' {...register("from", { required: true })} />
                    {errors.to && <span>This field is required</span>}
                </div>
                <div>
                    <h1>To</h1>
                    <input className='input h-8 rounded-md input-bordered input-info w-[99%] mx-auto' placeholder='To Station' {...register("to", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.to && <span>This field is required</span>}
                </div>
            </div>


            <div className=''>
                <div className='relative'>
                    <h1>Date of Journey</h1>
                    <input type='date' className='input h-8 rounded-md input-bordered input-info w-[99%] mx-auto' placeholder='Pick A Date' />

                    <div className={`absolute bg-white ${isOpen ? `block` : 'hidden'}`}>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            styles={{
                                caption: { color: 'white', backgroundColor: 'green' }
                            }}
                        />
                    </div>
                </div>
                <div>
                    <h1>Choose Class</h1>
                    <select className="input h-8 rounded-md input-bordered input-info w-full">
                        <option disabled selected>Choose Your Class</option>
                        <option>AC_B</option>
                        <option>AC_S</option>
                        <option>Snigdha</option>
                    </select>
                </div>
            </div>


            <br />

            <button type="submit" className='bg-green-700 px-3 py-1 rounded-sm text-white w-full' >
                Submit
            </button>
        </form>
    );
};

export default SearchTrains;