import React, { useState } from 'react';
import High from './assets/high.png';
import increased from './assets/increased.png';
import normalW from './assets/normalW.png';
import underW from './assets/underW.png';
import vhigh from './assets/vhigh.png';

const App = () => {
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [bmi, setBmi] = useState(null);
  const [image, setImage] = useState('');
  const [bmiText, setBmiText] = useState('');
  const [textColor, setTextColor] = useState('');
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateBmi = () => {
    if(weight && length ){

    const heightInMeters = length / 100;
    const bmiValue = weight / (heightInMeters ** 2);
    setBmi(bmiValue.toFixed(1));
    
    const targetBmi = 22;
    const idealWeightValue = targetBmi * (heightInMeters ** 2);
    setIdealWeight(idealWeightValue.toFixed(1));
    
    setLength('');
    setWeight('');

    if (bmiValue < 18.5) {
      setImage(underW);
      setBmiText('Underweight');
      setTextColor('text-blue-500');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setImage(normalW);
      setBmiText('Normal Weight');
      setTextColor('text-green-500');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setImage(increased);
      setBmiText('Increased');
      setTextColor('text-yellow-500');
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      setImage(High);
      setBmiText('High');
      setTextColor('text-orange-500');
    } else if (bmiValue >= 35 && bmiValue <= 39.9) {
      setImage(vhigh);
      setBmiText('Very High');
      setTextColor('text-red-500');
    } 
  }else {
    setImage();
    setBmiText('');
    setBmi('');
    // setBmiText('Enter your weight and High');
    // setTextColor('bg-gray-100');
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">BMI</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <input
          type="number"
          placeholder="Weight"
          className="input input-bordered w-full mb-4"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height cm"
          className="input input-bordered w-full mb-4"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button
          className="btn bg-red-200 w-full"
          onClick={calculateBmi}
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center flex flex-col justify-evenly gap-2">
            <h2 className="text-2xl font-semibold">Your BMI: {bmi}</h2>
            <h2 className={`text-xl ${textColor}`}>{bmiText}</h2>
            {image && <img src={image} alt="BMI category" className="mt-2 w-36 h-36 mx-auto" />}
            {idealWeight && (
              <h2 className="text-lg mt-4 font-bold">
                Ideal Weight: {idealWeight} kg
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
