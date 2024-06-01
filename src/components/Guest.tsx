import { Button } from "./ui/button"

const Guest = () => {
  return (
    <div className="container mx-auto mt-[60px]" id="smartContact">
      <div className="bg-[url('/src/assets/bg-img.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center p-[41px] gap-y-5 px-40 text-center">
        <h1 className="font-poppins text-[45px] font-semibold text-[#010F52]">Take Our Services</h1>
        <p className="font-poppins text-[20px] text-[#4E4E4E] font-normal"> we are ready to serve you best to mitigate your problems with our expert teams and technologies. We are open for our partners, suppliers and buyers.</p>
        <div className="flex gap-x-6">
          <Button className="bg-[#243A73] text-white w-[200px] h-[60px]">SIGN IN</Button>
          <Button className="text-[#243A73] bg-white hover:bg-[#243A73] hover:text-white  w-[200px] h-[60px]">SIGN UP</Button>
        </div>
      </div>
    </div>
  )
}

export default Guest