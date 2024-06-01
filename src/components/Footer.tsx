import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitch, IoLogoTwitter, IoSend } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="mt-[60px] bg-gradient-to-r from-[#1E2760] via-[#1662A5] to-[#1E2760] p-24 grid grid-cols-5 gap-x-6">
      
      <div className="flex flex-col gap-4">
        <h1 className="font-poppins font-semibold text-[35px] text-white">LOGO</h1>
        <p className="text-[14px] font-poppins font-normal text-white">Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
        <div className="flex gap-x-4">
          <IoLogoFacebook className="text-[25px] text-white" />
          <IoLogoTwitter className="text-[25px] text-white" />
          <IoLogoGoogle className="text-[25px] text-white" />
          <IoLogoTwitch className="text-[25px] text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[18px] font-poppins text-white font-bold">My Account</h1>
        <ul className="text-white text-[14px] font-normal font-poppins flex flex-col gap-3">
          <li>Authors</li>
          <li>Collection</li>
          <li>Author Profile</li>
          <li>Create Collection</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[18px] font-poppins text-white font-bold">Resources</h1>
        <ul className="text-white text-[14px] font-normal font-poppins flex flex-col gap-3">
          <li>Help & Support</li>
          <li>Live Auctions</li>
          <li>Item Details</li>
          <li>Activity</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[18px] font-poppins text-white font-bold">Comunities</h1>
        <ul className="text-white text-[14px] font-normal font-poppins flex flex-col gap-3">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Our Blog</li>
          <li>Discover</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[18px] font-poppins text-white font-bold">Subscribe Us</h1>
        <div className="flex items-center">
          <input type="text" placeholder="info@yourmail.com" className="text-[12px] p-4 w-full rounded-l-sm" />
          <span className=" bg-[#64A5CA] p-[18px] rounded-r-sm">
            <IoSend className="text-white" />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Footer