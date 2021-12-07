import Image from 'next/image';

const TokenAllocationSection = () => (
  <section className="p-4 py-8 sm:py-20 min-h-screen home-bg-1 home-section-bg">
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 sm:gap-20 w-full mb-8 sm:mb-20">
        <div className="frame-stone p-4">
          <p className="frame-paper p-8 text-lg text-main2">
            The DFH token is a BSC-based fungible cryptographic token. A fungible token is one that
            may be exchanged for other tokens of the same type, so that one DFH token has the same
            value and properties as any other single DFH token.
          </p>
        </div>
        <h2 className="flex-1">
          <p className="home-heading">
            TOKEN
            <br />
            ALLOCATION
          </p>
        </h2>
      </div>
      <Image
        src="/assets/images/pages/home/token-distribution-chart.png"
        width={889}
        height={882}
        alt="Token distribution chart"
      />
    </div>
  </section>
);

export default TokenAllocationSection;
