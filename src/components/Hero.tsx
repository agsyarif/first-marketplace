const Hero = () => {
  return (
    <div className="flex items-center container mx-auto justify-between h-[100%]">
      {/* <img src="./assets/hero.png" alt="hero" width={700} height={700} /> */}
      <img src="./assets/hero.png" alt="hero" width={700} height={700} />
      <div className="flex flex-col gap-8">
        <h1 className="font-poppins font-bold text-[96px] leading-[1] bg-gradient-to-r from-[#243A73] to-[#FB5B01] bg-clip-text text-transparent">First marketplace</h1>
        <p className="font-poppins text-primary font-semibold text-[45px]">for offering services for our suppliers and buyers </p>
      </div>
    </div>
  )
}

export default Hero