
import { CircularProgress } from '@/components/ui/progress';


const CompleteProfile = ({progress}) => {


    return(
        <>
         <div className='flex items-center bg-[#A7C2C5] mx-6 my-4 h-20 rounded-3xl'>
                <div className='mx-4'>
                <CircularProgress value={progress} />
                </div>
                <div className='text-md font-semibold'>
                   {progress === 100 ? "Profile Completed!!" : " Complete Your Profile"}
                </div>
            </div>
        </>
    )
}

export default CompleteProfile