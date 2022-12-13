import React from 'react';
import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
  return (
    <button
      className="flex items-center justify-center w-full bg-blue-500 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      구글로 계속하기
    </button>
  );
}
