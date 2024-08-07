import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import apod from '../images/apod.jpg';
import sojuz from '../images/Sojuz.jpg';
import galaxy from '../images/hubble-galaxy.jpg';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { Link } from 'react-router-dom';

const Home = () => {
    const IMAGES = [apod, sojuz, galaxy]
    return(
        <div>
      <Navbar />
      <div className='mt-10 flex-grow'>

      <div className="overflow-hidden w-full">
        <ImageCarousel imageUrls={IMAGES}/>
      </div>
      </div>
      <section className="bg-transparent dark:bg-transparent">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to Interplanetum 🚀🌍
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            In this app you can communicate with other planets and those planets are in real time simulation.
          </p>
          <Link to={"/login"}><a href="#" className="mx-2 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </a>
          </Link>
          <Link to={"/register"}><a href="#" className="mx-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Register
          </a>
          </Link>
        </div>
      </section>
    </div>
    );
};

export default Home;