import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface LoginModalProps {
  login?: (phone: string) => void
}

const LoginModal = ({ login = () => {} }: LoginModalProps) => {
  const [name, setName] = useState<string | undefined>('')
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>('');

  const handleLogin  = (event: any) => {
    event.preventDefault()
    login(phoneNumber || '')
  }

  return (
    <div>
      <h4 className='text-center mt-6 mb-10 text-lg font-[600] text-[#494949]'>
        Login
      </h4>
      <form>
        <div className='mb-6'>
          <label className='block mb-2 text-xs font-medium text-gray-900 dark:text-white'>
            Your Name
          </label>
          <input
            type='text'
            id='username'
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 '
            placeholder='Enter your name'
            required
          />
        </div>
        {/* <div className="mb-6">
          <label className="block mb-2 text-xs font-medium text-gray-900">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5"
            required
          />
        </div> */}
        <div className="mb-6">
        <PhoneInput
          placeholder='Enter phone number'
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
        />
        </div>
        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50'
            />
          </div>
          <label className='ml-2 text-xs font-medium text-gray-900 '>
            Remember me
          </label>
        </div>
        <button
          disabled={!name || !phoneNumber}
          onClick={handleLogin}
          className='text-white bg-blue-700  font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center '
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
