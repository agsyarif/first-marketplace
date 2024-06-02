const services = [
  {img: './assets/services/1.png', title: 'Research & analytics', desc: 'wide range of research and analytics provides clear insights of global business market situations for upgrading the'},
  {img: './assets/services/2.png', title: 'Innovations & Technologies', desc: 'Strong one end AI- Platform helps to instant procure, hiring supports, technological team, supply products to global, and real-time '},
  {img: './assets/services/3.png', title: 'Manufacturing', desc: 'deep research and analytics invloving in manufacturing, production and operations related latest technologies that minimize the '},
  {img: './assets/services/4.png', title: 'Cost reduction', desc: 'our smart services offering free services that reducing wide range of third party cost minimizing and on time supports from collaborative business partners '},
  {img: './assets/services/5.png', title: 'Global C-Smart marketing', desc: 'offering purchase raw material for your production and market your final product to global market with its own virtual showroom facilities'},
  {img: './assets/services/6.png', title: 'Technological Team', desc: ' real-time solutions provides online and offline (upon request) from world class technological or domain experts'},
];

const Services = () => {
  return (
    <div className="container mx-auto" id="services">
      <div className="flex flex-col items-center gap-1 mt-[60px]">
        <h2 className="font-poppins text-[48px] font-semibold text-primary">Sustainable Services</h2>
        <p className="font-poppins font-normal text-[20px] text-[#4E4E4E]">we powering to your business with our smart services strategies who are regularize business with us</p>
      </div>
      <div className="mt-[40px] grid grid-cols-3 gap-y-11 gap-x-11">

        {services.map((service, index) => {
          return <div key={index} className="bg-muted hover:bg-white min-w-[350px] min-h-[350px] rounded-lg drop-shadow-md px-8 flex flex-col justify-center items-center text-center transition-all gap-y-8">
            <img src={service.img} alt="1" width={82} height={82} />
            <div className="flex flex-col gap-2">
              <h5 className="text-[24px] font-poppins font-semibold text-accent">{service.title}</h5>
              <p className="text-[15px] font-normal font-poppins text-primary-foreground">{service.desc}</p>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default Services