import { classnames, TArg } from 'tailwindcss-classnames';

interface IProps {
  id: string;
  className?: TArg;
}

const IntroSection = ({ id, className }: IProps) => (
  <section id={id} className={classnames('mt-20', className)}>
    <div className="w-full px-8 flex flex-col items-center">
      <h2 className="home-heading mx-auto mb-28">INTRODUCTION</h2>
      <div className="frame-stone p-12 max-w-7xl">
        <div className="frame-paper py-28 px-32">
          <ul className="list-disc text-main2 text-2xl">
            <li className="mb-4">
              Welcome to Lost Dungeon
              <br />
              Lost Dungeon (LDC) is a Play-to-Earn NFT RPG game developed on the Binance Smart Chain
              platform. Players may participate in combat using their assets to earn $LDC tokens.
              Assets are player-owned NFTs minted in the ERC-721 standard which may be traded on the
              proprietary marketplace.
            </li>
            <li className="mb-4">
              Vision and mission statement
              <br />
              Our vision is for everyone, of any age, to enjoy their time playing our games and get
              the experience they deserve, while gaining a decent income doing it.Our mission is to
              create Fun to Play and Play to Earn games that bring joys and wealthiness into
              players&apos; lives. We want players to enjoy their in-game as well as real-life
              activities, which is why our blockchain gaming ecosystem is designed to provides just
              that.
            </li>
            <li>
              Play to Earn
              <br />
              Lost Dungeon utilizes a Play-to-Earn model by distributing $LDC through mining and
              game activities, giving value to player NFTs by increasing their use through future
              features.NFTs may be freely traded on the marketplace for $LDC tokens, which can then
              be traded on exchanges or converted to fiat currency.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
