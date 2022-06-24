import React, {useRef} from "react";
import JSZip from "jszip"

import Tree from '../Tree/Tree'

import { ReactComponent as IconLogo } from '../../images/archive-extractor.svg'
import { DiGoogleDrive, DiDropbox } from "react-icons/di";
import { HiLink } from "react-icons/hi";

var x;

var Zipfilenames = [];
var file ;
function App() {
    const inputFileRef = useRef( null );
    const [show , setShow] = React.useState(true);
    const [showinput, setShowinput] = React.useState(false);

    const onFilechange = ( e ) => {
        file = e.target.files[0];
        var jszip = new JSZip();
        try{
            let filename = file.name
            var reader = new FileReader(); 

            reader.onload = function(ev) {
                jszip.loadAsync(file).then(function(zip) {
                    // console.log(zip.files)
                    x = Object.keys(zip.files)
                    
                    for(let i in x){
                        Zipfilenames.push(x[i])
                    }
                    setShow(false)
                    setShowinput(true)
                }).catch(function(err) {
                    console.error("Failed to open", filename, " as ZIP file");
                })
            };

            
            reader.onerror = function(err) {
                console.error("Failed to read file", err);
            }
            reader.readAsArrayBuffer(file);

        }
        catch{
            console.error('No file selected');
        }

      }

    const spanText=(e)=>{
        e.preventDefault();
        console.log("clicked");
        return(
            <h1>Hi</h1>
        );
    }
    
    return (
      <section className='font-sans'>

        <div className="flex justify-center mt-5 text-[#333333]">
            <div className='group flex'>
                <a href='https://extract.me/'><IconLogo width='63' fill='#333333'/></a>
                <a href='https://extract.me/'><h1 className='px-3 py-4 text-2xl font-medium group-hover:text-blue-500'>Archive Extractor</h1> </a>
            </div>
        </div>
        
        <div className='flex justify-center text-sm text-gray-600'>
            <div className='flex flex-col'>
                <div>
                    Archive Extractor is a small and easy online tool that can extract over 70 types of 
                </div>
                <div className='px-10 '>
                    compressed files, such as 7z, zipx, rar, tar, exe, dmg and much more. 
                </div>
            </div>   
        </div>
        {!showinput ?
        <div className='flex justify-center m-6'>
            <div className='box-content h-[220px] w-[575px] p-4 border-[1.5px] rounded bg-white shadow-slate-300'>
 
                <div className="mt-5 flex items-center justify-center bg-grey-lighter">
                    <label className="w-60 flex flex-col items-center px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer">
                        <span className="mt-1 text-base leading-normal">Choose file</span>
                        <span className="mt-1 text-[12px] text-slate-300">from your computer</span>
                        <input type='file' ref={inputFileRef} onChange={onFilechange} className="hidden" />
                    </label>
                </div>

                <div className='flex m-6'>
                    <div className='flex justify-center text-blue-600 group pl-[90px]'>
                        <a className='flex hover:underline text-[14px]' href='https://extract.me/'>
                            <i className='text-gray-600 px-1 group-hover:text-blue-700'><DiGoogleDrive size='25' /></i>
                            from Google Drive
                        </a>
                    </div>
                    
                    <div className='flex justify-center text-blue-600 group px-5'>
                        <a className='flex hover:underline text-[14px]' href='https://extract.me/'>
                            <i className='text-gray-600 px-1 group-hover:text-blue-700'><DiDropbox size='25' /></i>
                            Dropbox
                        </a>
                    </div>

                    <div className='flex justify-center text-blue-600 group'>
                        <a className='flex hover:underline text-[14px]' href='https://extract.me/'>
                            <i className='text-gray-600 px-1 group-hover:text-black'><HiLink size='20' /></i>
                            URL
                        </a>
                    </div>
                </div>
            

                <div className='flex justify-center text-gray-400 italic '>
                    or drag and drop file here... 
                </div>
     

            </div>
        </div>: null}
        {!show ? <Tree filenames={Zipfilenames} file={file}/>: null}

        <div className='flex justify-center text-sm text-[#383434]'>
            <div className='flex flex-col'>
                <div className='ml-[200px] text-[14px] text-gray-600 font-semibold'>
                    Supported formats: 
                </div>
                <div className='px-10 py-1'>
                    <div className='text-[13px] text-gray-600 flex flex-col'>
                        <div>
                            7z, zipx, rar, tar, exe, dmg, iso, zip, msi, nrg, gz, cab, bz2, wim, ace
                            <a href="https://extract.me/" onClick={spanText} className='px-2 text-[13px] text-blue-600 hover:underline'>and 54 more</a>
                        </div>
                        
                        
                        {/* <span className=' pl-[300px] break-before-word'>
                            alz, ar, arc, arj, bin, cdi, chm, cpt, cpio, cramfs, crunch, deb, dd, dms, ext, fat, format, gpt, hfs, ihex,
                            lbr, lzh, lzma, lzm, mbr, mdf, nsa, nds, nsis, ntfs, pit, pak, pdf, pp, qcow2, rpm, sar, squashfs,
                            squeeze, sit, sitx, swf, udf, uefi, vdi, vhd, vmdk, warc, xar, xz, z, zoo, zi, jar
                        </span> */}
                        
                    </div> 
                </div>

                <div className='my-1 ml-[145px] text-[14px] text-gray-600 font-semibold'>
                    Supports password-protected archives
                </div>

                <div className='ml-[95px] text-[14px] text-gray-600 font-semibold'>
                    Can unpack multi-part archives (zip.001, rar.part1, z01, etc)
                </div>
            </div>   
        </div>
        
      </section>
    );
  }
  
  export default App;
  