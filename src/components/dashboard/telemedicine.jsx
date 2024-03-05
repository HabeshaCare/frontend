import {Button} from "@/components/ui/button"
import Telemed from "@/public/img/telemed.png"

const Telemedicine = () => {

    return(
        <>
         <div className="flex ml-12 h-full my-28">
             <div className="flex flex-col w-1/2">
                    <div className="text-[#1F555D] text-5xl font-medium font-serif mt-12 mb-4">
                        Telemedicine
                    </div>

                    <div className="my-8 font-light text-3xl">
                    Connect with qualified doctors instantly based on your profile or the description you give. 
                    Experience convenient TeleMedicine for prompt medical assistance.
                    </div>
                    <div>
                        <Button className = "font-medium text-white w-60 h-16 mt-16 bg-[#1F555D] text-xl">Get Your Doctor</Button>
                    </div>
             </div>

             <div className="w-1/2">
                <img src={Telemed} alt="Telemedicine image" />
             </div>
         </div>
        
        
        </>
    )
}

export default Telemedicine