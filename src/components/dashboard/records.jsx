import {Button} from "@/components/ui/button"
import record from "@/public/img/record.png"


const Records = () => {
    return(
        <>

        <div>
            <div>
                <img src={record} alt="Health record image" />
            </div>

            <div>
               <div>
               Medical Records
               </div>

               <div>
               Access your medical records, including doctor notes, 
               medications, and lab test results, for a complete overview of your health history.
               </div>

               <div>
                <Button/>
               </div>
            </div>


        </div>
        
        </>
    )
}

export default Records