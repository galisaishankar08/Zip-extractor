import {BsGlobe} from 'react-icons/bs'

function App() {
    return (
      <footer className="font-sans mt-[90px] flex">
        <div className="flex">
          <div className="text-[12px] text-[#B3B3B3] mx-8">
          © 123apps LLC, 2012–2022
          </div>
          
          <div className=" text-slate-500 text-[14px] hover:underline">
            <a href="https://extract.me/">Privacy</a>
          </div>

          <div className=" mx-8 text-slate-500 text-[14px] hover:underline">
            <a href="https://extract.me/">Pricing</a>
          </div>

          <div className=" text-slate-500 text-[14px] ">
            <button className="hover:underline" href="https://extract.me/">Contact Us</button>
          </div> 
        </div>

        <div className=''>
          <div className="group ml-[800px] flex text-[14px] text-slate-500">
            <a className="flex hover:underline" href="https://extract.me/"> <i className='pr-1 group-hover:text-black'><BsGlobe size='18' /></i> English</a>
          </div>
        </div>

      </footer>
    );
  }
  
  export default App;
  