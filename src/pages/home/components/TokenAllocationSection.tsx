import Image from 'next/image';

const TokenAllocationSection = () => (
  <section className="p-4 py-8 sm:py-20 min-h-screen home-token-section-bg home-section-bg">
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 sm:gap-20 w-full mb-8 sm:mb-20">
        <p className="text-lg">
          The DFH token is a BSC-based fungible cryptographic token. A fungible token is one that
          may be exchanged for other tokens of the same type, so that one DFH token has the same
          value and properties as any other single DFH token.
        </p>
        <h2 className="flex-1 font-creepster">
          <span className="home-heading home-heading-small">TOKEN</span>
          <br />
          <span className="home-heading home-heading-large">ALLOCATION</span>
        </h2>
      </div>
      <Image
        src="/images/pages/home/token-distribution-chart.png"
        width={889}
        height={882}
        alt="Token distribution chart"
      />
    </div>
  </section>
);

export default TokenAllocationSection;
