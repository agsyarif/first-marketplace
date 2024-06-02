import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

const industries = [
  {img: '%PUBLIC_URL%/assets/industries/1.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/2.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/3.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/4.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/1.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/2.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/3.png', title: 'Supply chain solution'},
  {img: '%PUBLIC_URL%/assets/industries/4.png', title: 'Supply chain solution'},
];

const Industries = () => {
  return (
    <>
    
      <div className="flex flex-col items-center gap-1 mt-[60px] container mx-auto">
        <h2 className="font-poppins text-[48px] font-semibold text-primary">Industries we covered</h2>
        <p className="font-poppins font-normal text-[20px] text-[#4E4E4E]">Want to access precise products from tailored categories?</p>
      </div>

      <div className="bg-[#F2F2F2] w-screen">
        <div className="container mx-auto">

          <div className="mt-[40px] py-24">

            <Swiper slidesPerView={1} breakpoints={{
              640: { slidesPerView:4 },
              1400: { slidesPerView:4 },
            }}
            spaceBetween={30}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{clickable:true}}
            className="h-[300px]"
            >

              {industries.map((industry, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div key={index} className="bg-white min-w-[240px] min-h-[180px] rounded-lg drop-shadow-md pt-8 flex flex-col justify-arround gap-y-6 items-center text-center transition-all">
                      <div className="bg-muted p-4 rounded-full">
                        <img src={industry.img} alt="1" width={60} height={60} />
                      </div>
                      <div className="bg-[#F7ECDE] w-full py-4">
                        <h5 className="text-[15px] font-poppins font-semibold text-accent">{industry.title}</h5>
                      </div>
                    </div>

                  </SwiperSlide>
                )
              })}

            </Swiper>

          </div>
        </div>
      </div>
    </>
  )
}

export default Industries