import React, { forwardRef, useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import { Navigate, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'



const SearchTrains = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const fromStation = data.from;
        const toStation = data.to;
        const classOfChair = data.class;

        // if (classOfChair === 'Choose Your Class' || !selectedDate) {
        //     return
        // }
        const date = format(selectedDate, 'P')

        navigate(`/searchTrainsResults/search?fromCity=${fromStation}&toCity=${toStation}&doj=${date}&class=${classOfChair}`)





        console.log(fromStation, toStation, classOfChair, date);

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] lg:mt-12 mx-auto'>
            <div className=''>
                <div className='mb-2'>
                    <h1>From</h1>
                    <input className='input h-8 rounded-md input-bordered input-info w-full' placeholder='From Station' {...register("from", { required: true })} />
                    <p className='text-red-500 font-bold'> {errors.from && <span>From is required</span>}</p>

                </div>
                <div className='mb-2'>
                    <h1>To</h1>
                    <input className='input h-8 rounded-md input-bordered input-info w-[99%] mx-auto' placeholder='To Station' {...register("to", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    <p className='text-red-500 font-bold'>{errors.to && <span>To is required</span>}</p>
                </div>
            </div>


            <div className=''>

                {/* Day picker calender */}

                <div className='mb-2'>
                    <h1>Date of Journey</h1>
                    <div className='relative'>
                        <DatePicker
                            selected={selectedDate}
                            isClearable
                            className='input h-8 rounded-md input-bordered input-info bg-transparent disabled w-[99%] mx-auto'
                            placeholderText="Pick a date"
                            onKeyDown={(e) => {
                                e.preventDefault();
                            }}
                            dateFormat="dd/MMM/yyyy"
                            minDate={new Date()}
                            maxDate={addDays(new Date(), 5)}
                            onChange={(date) => setSelectedDate(date)} />
                        {
                            !selectedDate && <img className='absolute top-2 right-5 -z-10' src="https://d19qjkjk65tfln.cloudfront.net/img/calendar.png" alt="" />
                        }

                    </div>
                </div>

                <div className=''>
                    <h1>Choose Class</h1>
                    <select defaultValue={`Choose Your Class`} {...register("class", { required: true })} className="input h-8 rounded-md input-bordered input-info w-full uppercase">
                        <option disabled >Choose Your Class</option>
                        <option>AC_B</option>
                        <option>AC_S</option>
                        <option>Snigdha</option>
                        <option>F_Berth</option>
                        <option>F_Seat</option>
                        <option>F_Chair</option>
                        <option>S_Chair</option>
                        <option>Shovan</option>
                        <option>Shulov</option>
                        <option>Ac_Chair</option>
                    </select>
                    <p className='text-red-500 font-bold'> {errors.class && <span>Class is required</span>}</p>
                </div>


            </div>


            <br />

            <button type="submit" className='bg-green-800 uppercase font-bold p-3 rounded-sm text-white w-full' >
                Search Trains
            </button>
        </form>
    );
};


export default SearchTrains;

//this is for custom input

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
    </button>
));