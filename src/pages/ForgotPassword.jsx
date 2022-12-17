import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("이메일이 전송되었습니다");
    } catch (error) {
      toast.error("비밀번호를 재설정할 수 없습니다");
    }
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        비밀번호 찾기
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img 
            src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="key"
            className="w-full rounded-2xl" 
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={onChange}
              placeholder="이메일"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                계정이 없으십니까?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                   회원가입
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  로그인으로 돌아가기
                </Link>
              </p>
            </div>
            <button 
              className="w-full bg-red-400 text-white px-7 py-3 text-sm font-sm font-medium uppercase rounded shadow-md hover:bg-red-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-600"
              type="submit"
            >
              비밀번호 다시 설정
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}