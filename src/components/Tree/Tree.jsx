import JSZip from "jszip"

const Tree=({ filenames, file })=>{
    try{
        let filename = file.name
        var reader = new FileReader(); 
        var jszip = new JSZip();

        reader.onload = function(ev) {
            jszip.loadAsync(file).then(function(zip) {
                // console.log(zip.files)
                var vals = Object.values(zip.files)
                // console.log(vals)
                vals.map(f =>
                    console.log(f)
                )
            
            }).catch(function(err) {
                console.error("Failed to open", filename, " as ZIP file");
            })
        };
        // console.log(Zipfilesnames)
        
        reader.onerror = function(err) {
            console.error("Failed to read file", err);
        }
        reader.readAsArrayBuffer(file);

    }
    catch{
        console.error('No file selected');
    }

    return(
        <>
        <div className='flex justify-center m-6'>
            <div className='box-content h-fit w-[575px] p-6 border-[1.5px] rounded bg-white shadow-slate-300'>
                <ul>
                    {filenames.map(name => 
                        <li key={name}><a href="https://extract.me/">{name}</a></li>
                    )}
                </ul>
            </div>
        </div>            
        </>     
    );
}

export default Tree;