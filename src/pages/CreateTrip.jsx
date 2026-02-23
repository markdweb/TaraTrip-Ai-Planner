import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const CreateTrip = () => {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        destination: null,
        noOfDays: '',
        traveler: '',
        budget: '',
    })

    // Planner for View
  return (
    <div className='max-padd-container flex justify-center items-start min-h-screen pt-20 pb-16'>
        {/* Container */}
        <div className='w-full max-w-3xl min-h-[86vh] sm:min-h-[80vh] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col'>
            {/* Progress bar  */}
            <div className='h-2 bg-indigo-100 w-full'>
                <div className='h-full bg-indigo-600 transition-all duration-500 ease-out'
                style={{width: `${(step / 3) * 100}%` }} />
            </div>

            <div className='p-5 md:p-12 flex flex-col flex-1'>
                {/* Steps Indicators */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                        <div
                        key={s}
                        className={`h-2 transition-all duration-300 rounded-full ${
                            step === s
                            ? "w-8 bg-indigo-600"
                            : step > s
                            ? "w-2 bg-indigo-600"
                            : "w-2 bg-gray-300"
                        }`}
                        />
                    ))}
                    </div>

                <div className='flex-1 flex flex-col pt-2 sm:pt-12'>
                        {/* Step 1: Destination & Days  */}    
                        {step == 1 && (
                            <div>
                                <div className='text-center mb-8'>
                                    <h3 className="mb-2">Where's your next adventure?</h3>
                                    <p>Select your destination and duration (max 5 days).</p>
                                </div>

                                <div>
                                    <label htmlFor="">Destination</label>
                                    <GooglePlacesAutocomplete
                                            apiKey=''
                                     />
                                </div>
                            </div>
                        )}
                </div>

            </div>
        </div>
    </div>
  )
}

export default CreateTrip
