import { Button } from "./ui/button"

const Career = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <div className="grid grid-cols-2 items-center">
        <div className="mx-auto">
          <img src="./src/assets/section.png" alt="#" width={500} height={500} />
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[48px] font-poppins font-semibold text-[#010F52]">Having Access to <br />
              Life-Long <span className="text-[#F7A928]">career</span></h1>
          <p className="font-poppins text-[20px] text-[#737576] font-light">our smart services offering free services that reducing wide range of third party cost minimizing and on time supports from collaborative business partners </p>
          <Button className="bg-[#FCD635] hover:bg-[#F7A928] w-fit text-[15px] text-[#000000] p-4">READ MORE</Button>
        </div>
      </div>
    </div>
  )
}

export default Career