import { BsChevronDown, BsSoundwave, BsFileArrowDown, BsFileArrowUp, BsMusicNoteBeamed, BsFillImageFill, BsArchive } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { AiOutlineYoutube, AiOutlineSplitCells } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import { TbScissors } from "react-icons/tb";
import { HiOutlineVolumeUp } from "react-icons/hi";

import { ReactComponent as IconLogo } from '../../images/123-apps.svg'
import { ReactComponent as IconConverter } from '../../images/converter.svg'
import { ReactComponent as IconUtilities } from '../../images/utilities.svg'

function Navbar() {
  return (
    <>
    <div className='bg-black h-[53px] flex text-[13px]'>
        <div className='inline-block px-7 py-4 '>
            <a href="https://123apps.com/">
              <IconLogo />
            </a>
        </div>
        
        <nav className='text-white'>
          <ul className='flex'>

            <li className='group py-4 w-[140px] hover:bg-[#1a1818]' >
              <a  className="pl-3 flex" href="https://extract.me/">
                <i className='h-5 pr-2 pt-[1px]'><AiOutlineYoutube size={20}/> </i>Video Tools              
                <i className='pl-2 pt-[5px] transform group-hover:rotate-180 group-hover:pr-[7px] pb-[5px] transition duration-75'><BsChevronDown /></i> 
              </a>
              <ul className="hidden group-hover:flex hover:flex my-[9px] w-[200px] h-[0px] flex-col bg-[#212121] drop-shadow-lg">
                  <li className='px-2 py-2 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><FaPhotoVideo size='18'/></i><a href="https://extract.me/#">Video Editor</a></li>
                  <li className='px-2 py-2 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><TbScissors size='18'/></i><a href="https://extract.me/#">Trim Video</a></li>
                  <li className='px-2 py-2 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><FaPhotoVideo size='18'/></i><a href="https://extract.me/#">Merge Video</a></li>
              </ul>
            </li>

            <li className='group py-4 w-[140px] hover:bg-[#1a1818]' >
              <a  className="pl-3 flex" href="https://extract.me/">
                <i className='h-5 pr-2 pt-[1px]'><BsSoundwave size={20}/> </i>Audio Tools              
                <i className='pl-2 pt-[5px] transform group-hover:rotate-180 group-hover:pr-[7px] pb-[5px] transition duration-75'><BsChevronDown /></i> 
              </a>
              <ul className="hidden group-hover:flex hover:flex my-[9px] w-[200px] h-[0px] flex-col bg-[#212121] drop-shadow-lg">
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><TbScissors size='18'/></i><a href="https://extract.me/#">Trim Audio</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><HiOutlineVolumeUp size='18'/></i><a href="https://extract.me/#">Change Volume</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><BiTimer size='18'/></i><a href="https://extract.me/#">Change Speed</a></li>
              </ul>
            </li>

            <li className='group py-4 w-[125px] hover:bg-[#1a1818]' >
              <a  className="pl-3 flex" href="https://extract.me/">
                <i className='h-5 pr-2 pt-[1px]'><IoDocumentOutline size={18}/> </i>Pdf Tools              
                <i className='pl-2 pt-[5px] transform group-hover:rotate-180 group-hover:pr-[7px] pb-[5px] transition duration-75'><BsChevronDown /></i>
              </a>
              <ul className="hidden group-hover:flex hover:flex my-[9px] w-[200px] h-[0px] flex-col bg-[#212121] drop-shadow-lg">
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><BsFileArrowDown size='18'/></i><a href="https://extract.me/#">Convert from pdf</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><BsFileArrowUp size='18'/></i><a href="https://extract.me/#">Convert to pdf</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><AiOutlineSplitCells size='18'/></i><a href="https://extract.me/#">Split</a></li>
              </ul>
            </li>

            <li className='group py-4 w-[134px] hover:bg-[#1a1818]' >
              <a  className="pl-3 flex" href="https://extract.me/">
                <i className='h-5 pr-2 pt-[1px]'><IconConverter /> </i>Converters              
                <i className='pl-2 pt-[5px] transform group-hover:rotate-180 group-hover:pr-[7px] pb-[5px] transition duration-75'><BsChevronDown /></i>
              </a>
              <ul className="hidden group-hover:flex hover:flex my-[9px] w-[200px] h-[0px] flex-col bg-[#212121] drop-shadow-lg">
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><BsMusicNoteBeamed size='18'/></i><a href="https://extract.me/#">Audio Converter</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><FaPhotoVideo size='18'/></i><a href="https://extract.me/#">Video Converter</a></li>
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333]'><i className='px-2 py-1'><BsFillImageFill size='18'/></i><a href="https://extract.me/#">Image Converter</a></li>
              </ul>
            </li>

            <li className='group py-4 w-[120px] hover:bg-[#1a1818]' >
              <a  className="pl-3 flex" href="https://extract.me/">
                <i className='h-5 pr-2 pt-[1px]'><IconUtilities /> </i>Utilities              
                <i className='pl-2 pt-[5px] transform group-hover:rotate-180 group-hover:pr-[7px] pb-[5px] transition duration-75'><BsChevronDown /></i>
              </a>
              <ul className="hidden group-hover:flex hover:flex my-[9px] w-[225px] h-[0px] flex-col bg-[#212121] drop-shadow-lg">
                  <li className='px-3 py-3 flex bg-[#1a1818] hover:bg-[#343333] text-yellow-400'><i className='px-2 py-1'><BsArchive size='18'/></i><a href="https://extract.me/#">Archive Extractor</a></li>
              </ul>
            </li>

          </ul>
        </nav>
        <div className='grid content-center '>
          <button className="bg-transparent ml-[450px] px-4 py-1 hover:bg-[#343333] text-white font-semibold border border-gray-600  rounded"> Log in</button>
        </div>
        
    </div>
    </>
  );
}

export default Navbar;
