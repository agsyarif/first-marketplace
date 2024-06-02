const serviceArea = [
  {img: '%PUBLIC_URL%/assets/area/1.png', title: 'Research and Analytics'},
  {img: '%PUBLIC_URL%/assets/area/2.png', title: 'Risk Intelligince'},
  {img: '%PUBLIC_URL%/assets/area/3.png', title: 'Business and operations supports'},
  {img: '%PUBLIC_URL%/assets/area/4.png', title: 'Global marketing'},
  {img: '%PUBLIC_URL%/assets/area/5.png', title: 'Technical supports and solutions'},
  {img: '%PUBLIC_URL%/assets/area/6.png', title: 'Supply chain solution'},
]

const ServiceArea = () => {
  return (
    <div className="container mx-auto" id="serviceArea">
      <div className="flex flex-col items-center gap-1 mt-[60px]">
        <h2 className="font-poppins text-[48px] font-semibold text-primary">Service area</h2>
        <p className="font-poppins font-normal text-[20px] text-[#4E4E4E]">one stop solution for taking all services and supports that help to meet your goal rapidly with sustaibliy</p>
      </div>

      <div className="mt-[40px] flex justify-center gap-x-4 items-center">

      {serviceArea.map((service, index) => {
        return (
          <div key={index} className="bg-muted hover:bg-white min-w-[240px] min-h-[180px] rounded-lg drop-shadow-md px-4 pt-8 flex flex-col justify-arround gap-y-6 items-center text-center transition-all">
            <img src={service.img} alt="1" width={60} height={60} />
            <div className="flex flex-col gap-2">
              <h5 className="text-[15px] font-poppins font-semibold text-accent">{service.title}</h5>
            </div>
          </div>  
        )
      })}

      </div>
    </div>
  )
}

export default ServiceArea