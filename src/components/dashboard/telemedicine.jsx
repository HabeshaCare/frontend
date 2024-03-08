import {Button} from "@/components/ui/button"
import Telemed from "@/public/img/telemed.png"

const Telemedicine = () => {

    return(
        <>
         <div className="flex ml-8 h-screen  items-center">
             <div className="flex flex-col w-1/2 md:mt-12">
                    <div className="text-[#1F555D] text-3xl font-bold font-serif mt-12 mb-4 md:text-4xl">
                        Telemedicine
                    </div>

                    <div className=" font-light text-xl md:text-3xl">
                        Connect with qualified doctors instantly based on your profile or the description you give. 
                        Experience convenient TeleMedicine for prompt medical assistance.
                    </div>
                    <div className="mb-4">
                        <Button className = "font-medium text-white w-56 h-16 mt-8 bg-[#1F555D] text-xl">Get Your Doctor</Button>
                    </div>
             </div>

             <div className="w-1/2 flex items-center">
                <img src={Telemed} alt="Telemedicine" />
             </div>
         </div>
        
        
        </>
    )
}

export default Telemedicine