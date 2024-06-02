const solutions = [
  {img: '%PUBLIC_URL%/assets/solution/1.png', title: 'One Stop Solution', bg: '#F7ECDE'},
  {img: '%PUBLIC_URL%/assets/solution/2.png', title: 'Dedicated Service Expert', bg: '#DAEAF1'},
  {img: '%PUBLIC_URL%/assets/solution/3.png', title: 'Affordable Service', bg: '#FFE6E6'},
  {img: '%PUBLIC_URL%/assets/solution/4.png', title: 'Growth Monitoring System', bg: '#F2EBE9'},
]

const Solutions = () => {
  return (
    <div className="container mx-auto" id="smartRFQ">
       <div className="flex flex-col items-center gap-1 mt-[60px] container mx-auto">
          <h2 className="font-poppins text-[48px] font-semibold text-primary">Research .Solution .Execution .Fulfillment</h2>
          <p className="font-poppins font-normal text-[20px] text-[#4E4E4E]">We are doing with technologies and expertise: Deliver satisfied business.</p>
          <p className="text-[15px] font-poppins font-normal text-[#0000006e]">In-house customization of the most recent technology delivered our service for developing your business, along with our expertise, knowledge, and direct field execution.</p>
        </div>

        <div className="mt-[40px] flex justify-between gap-x-8 items-center">

          {solutions.map((solution, index) => {
            return (
              <div key={index} className={`bg-[${solution.bg}] hover:bg-white min-w-[300px] min-h-[180px] rounded-lg drop-shadow-md px-4 pt-8 flex flex-col justify-arround gap-y-6 items-center text-center transition-all`}>
                <img src={solution.img} alt="1" width={60} height={60} />
                <div className="flex flex-col gap-2">
                  <h5 className="text-[15px] font-poppins font-semibold text-accent">{solution.title}</h5>
                </div>
              </div>  
            )
          })}

        </div>

    </div>
  )
}

export default Solutions