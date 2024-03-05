import home from "@/public/img/Asset 4y.png"

const Home = () => {
    return(
        <>
        <div className="flex mt-8 ml-12 h-full">
            <div className="w-2/5">
                <img src={home} alt="Home Image" />
            </div>

            <div className="flex flex-col justify-center w-3/5">
              <div className="text-[#1F555D] text-5xl">
                Empowering Your Health Journey Anytime, Anywhere
              </div>

               <div className="mt-12">
                <p className="text-[#000000] font-light text-3xl">
                Simplifying your healthcare experience with us. Access lab results, 
                connect with healthcare professionals, and securely manage your medical records, 
                all in one place.
                </p>
               </div>
   
            </div>
        </div>
        </>
    )
}

export default Home