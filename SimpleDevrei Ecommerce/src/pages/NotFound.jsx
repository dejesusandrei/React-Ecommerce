import { Header } from "../components/Header";
import { NavLink } from 'react-router-dom'
import PageNotFoundImg from '../assets/web-maintenance.png'
import '../index.css'

export function NotFound(){
  return(
      <>
        <title>404 Page Not Found</title>
        <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

        <Header />

        <main className="mt-18">
          <section className="w-full">
            <div className="h-[calc(100dvh-75px)] max-w-155 lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center text-center md:text-left flex-col gap-1 order-2 md:order-1">
                  <h1 className="text-[20px] md:text-2xl lg:text-3xl font-mono font-bold mr-2">404. <span className="text-[20px] md:text-2xl font-roboto text-gray-500">That's an error.</span></h1> 
                  <p className="text-[15.5px] md:text-[16.5px] font-roboto ">The requested URL/ was not found in the server.</p>
                  <div className="mt-4.5">
                  <NavLink to="/" className="max-w-39.5 px-4 py-2 rounded-[5px] text-white bg-[rgb(25,135,84)] hover:underline">
                    Go Back To Home
                  </NavLink>
                  </div>
                </div>
                <div className="order-1 md:order-2 w-full h-auto max-w-112.5 object-contain"><img src={PageNotFoundImg} alt="Paage Not Found" /></div>
              </div>
            </div>
          </section>
        </main>
      </>
  );
}