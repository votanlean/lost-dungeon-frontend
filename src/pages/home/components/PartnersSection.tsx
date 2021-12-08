import Image from 'next/image';

const PartnersSection = () => (
  <section className="p-4 py-8 sm:py-20 min-h-screen home-bg-1 home-section-bg">
    <div className="home-content">
      <div className="flex flex-col items-center">
        <h2 className="home-heading mb-12">Developers</h2>
        <div className=" text-main2 flex flex-row flex-wrap sm:flex-nowrap items-center justify-center w-full gap-12 mb-16">
          <Image
            src="/assets/images/pages/home/dfh-studio.png"
            alt="dfh studio"
            layout="intrinsic"
            width={185}
            height={185}
          />
          <Image
            src="/assets/images/pages/home/coincu-lab.png"
            alt="coincu labs"
            layout="intrinsic"
            width={300}
            height={63}
          />
          <Image
            src="/assets/images/pages/home/dsculpt-studio.png"
            alt="d'sculpt studio"
            layout="intrinsic"
            width={190}
            height={190}
          />
          <Image
            src="/assets/images/pages/home/siz.png"
            alt="SIZ"
            layout="intrinsic"
            width={300}
            height={82}
          />
        </div>
        <h2 className="home-heading mb-12">Partners</h2>
        <div className=" text-main2 flex flex-row flex-wrap items-center justify-center w-full gap-12">
          <Image
            src="/assets/images/pages/home/rada.png"
            alt="RADA"
            layout="intrinsic"
            width={285}
            height={91}
          />
          <Image
            src="/assets/images/pages/home/coincu-ventures.png"
            alt="Coincu Ventures"
            layout="intrinsic"
            width={300}
            height={64}
          />
          <Image
            className="filter grayscale"
            src="/assets/images/pages/home/mgn.png"
            alt="MGN"
            layout="intrinsic"
            width={179}
            height={58}
          />
          <Image
            src="/assets/images/pages/home/ta-venture.png"
            alt="TA Venture"
            layout="intrinsic"
            width={160}
            height={158}
          />
          <Image
            src="/assets/images/pages/home/box-studio.png"
            alt="Box Studio"
            layout="intrinsic"
            width={230}
            height={173}
          />
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
