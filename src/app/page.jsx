import React from 'react'
import Link from 'next/link';
import {IconLogin} from '@tabler/icons-react'

const Home = () => {
  return (
    <div>

      <Link href="/login">Login Page</Link>
      <Link href="/signUp">SignUp Page</Link>
      <Link href="/contact">Contact Page</Link>
        <h1 style={{ textAlign: 'center', fontSize: 50 }}>Welcome to Home Page</h1>

        <img src="/next.svg" alt="" />
        <hr /><br /><input type="text" />

        <button className='mybtn'>My Button</button>
        <button className='loginBtn'><IconLogin size={20} stroke={1} color={'brown'}/>Lets Check</button>

    </div>
  )
}

export default Home; 