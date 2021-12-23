import Image from 'next/image';
import IconSend from './icon-send.svg';

import { LINK_DISCORD, LINK_FACEBOOK, LINK_TELEGRAM, LINK_TWITTER } from 'utils/constants';

const Footer = () => (
  <footer className="px-8">
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="border-t border-t-white border-opacity-50 flex flex-col md:flex-row gap-10 md:items-center justify-between md:px-4 py-8">
        <div className="w-40 md:w-96 self-center">
          <Image
            src="/assets/images/logo.png"
            width={3189}
            height={2592}
            alt="logo"
            layout="responsive"
            sizes="384px"
          />
        </div>
        <div className="text-[13px] font-semibold">
          <p className="mb-6 text-yellow-400">QUICK LINKS</p>
          <ul>
            <li className="mb-4 text-white">
              <a href="#">Home</a>
            </li>
            <li className="mb-4 text-white">
              <a href="#">Whitepaper</a>
            </li>
            <li className="mb-4 text-white">
              <a href="#">Pitch Deck</a>
            </li>
            <li className="mb-4 text-white">
              <a href="#">Marketplace</a>
            </li>
            <li className="mb-10 text-white">
              <a href="#">FAQs</a>
            </li>
          </ul>
          <div className="flex flex-row justify-between">
            <div className="text-yellow-400 inline-block mr-8">CONTACT US:</div>
            <a href="mailto:hello@lostdungeon.io" className="text-white">
              hello@lostdungeon.io
            </a>
          </div>
        </div>
        <div className="text-[13px] font-semibold">
          <p className="mb-6 text-yellow-400">COMMUNITY &amp; SOCIAL CHANNELS</p>
          <div className="flex flex-row gap-8 mb-16">
            <a href={LINK_TELEGRAM} target="__blank" className="hover:scale-110">
              <Image src="/assets/images/icon-telegram.png" width={52} height={52} alt="telegram" />
            </a>
            <a href={LINK_DISCORD} target="__blank" className="hover:scale-110">
              <Image src="/assets/images/icon-discord.png" width={52} height={52} alt="discord" />
            </a>
            <a href={LINK_TWITTER} target="__blank" className="hover:scale-110">
              <Image src="/assets/images/icon-twitter.png" width={52} height={52} alt="twitter" />
            </a>
            <a href={LINK_FACEBOOK} target="__blank" className="hover:scale-110">
              <Image src="/assets/images/icon-facebook.png" width={52} height={52} alt="facebook" />
            </a>
          </div>

          <p className="mb-6 text-yellow-400">JOIN NEWSLETTER</p>
          <form className="border border-gray-300 w-full md:min-w-[500px] flex flex-row p-6 gap-2">
            <input
              placeholder="Enter your email"
              className="bg-transparent focus:outline-none w-full text-white"
            />
            <button type="submit" className="hover:scale-110">
              <IconSend />
            </button>
          </form>
        </div>
      </div>
      <div className="font-semibold text-gray-400 text-center text-[13px] p-4 border-t border-t-white border-opacity-50">
        Copyright @Lost Dungeon 2021
      </div>
    </div>
  </footer>
);

export default Footer;
