import Image from 'next/image';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page flex flex-col justify-center items-center">
      <header>
        <h1 className='mt-5 text-6xl border-2 py-5 px-2 rounded-2xl text-center'>About My Blog</h1>
        <p className='mt-5'>Welcome to my blog! Here, I share my passions, experiences, and insights with the world.</p>
      </header>

      <section className="mt-5 authors">
        <h2 className='flex flex-col items-center text-2xl font-bold font-mono'>Tentang Saya</h2>
        <div className="author flex justify-center items-center flex-col">
          <Image src="/brndn.png" width={150} height={150} alt="Author 1"/>
          <h3 className='font-bold '>Brandon Isades Tjakradidjaja</h3>
          <p className='text-center mt-2'>Kelahiran Jakarta dan sekarang tinggal di Tangerang.<br></br>Saya mengejar mimpi saya untuk menjadi programmer!<br></br> Di Blog ini saya membagikan hal hal yang sesuai dengan passion saya! Semoga suka!</p>
        </div>
      </section>

      <section className="flex flex-col justify-center mt-5 mission-vision ">
        <h2 className='text-2xl font-bold font-mono flex justify-center'>Mission and Vision</h2>
        <p>
          Misi saya ialah untuk menjadikan reader blog ini mengetahui informasi-informasi yang menurut saya penting dan menarik untuk di bagikan!.
        </p>
      </section>

      <section className="mt-5 contact">
        <h3 className='font-bold font-mono text-2xl'>Contact Us</h3>
        <p>Feel free untuk reach out kepada saya!</p>
        <ul>
          <li>Email: <a href="mailto:brandonisades08@gmail.com" className="cursor-pointer bg-gray-400 rounded-2xl py-1 px-1">brandonisades08@gmail.com</a></li>
          <li>Follow on social media:</li>
          <li>
            <a href="https://instagram.com/brandonisades" target="_blank" rel="noopener noreferrer" className='cursor-pointer bg-gray-400 rounded-2xl py-1 px-1'>Instagram/brandonisades</a>
          </li>
          {/* Add other social media links if applicable */}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
