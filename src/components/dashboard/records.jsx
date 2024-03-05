import {Button} from "@/components/ui/button"
import record from "@/public/img/record.png"


const Records = () => {
    return(
        <>

        <div className="flex bg-[#d0eaec]">
            <div className="w-1/2">
                <img src={record} alt="Health record image" />
            </div>

            <div className="flex flex-col justify-center ml-8 w-1/2">
               <div className="text-[#1F555D] text-5xl font-bold font-serif items-center">
                    Medical Records
               </div>

               <div className="my-8 font-light text-3xl">
               Access your medical records, including doctor notes, 
               medications, and lab test results, for a complete overview of your health history.
               </div>

               <div >
                <Button className = "font-medium text-white w-60 h-16 mt-16 bg-[#1F555D] text-xl">View Records</Button>
               </div>
            </div>


        </div>
        
        </>
    )
}

export default Records