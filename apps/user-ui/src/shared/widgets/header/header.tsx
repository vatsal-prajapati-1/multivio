'use client';
import Link from 'next/link';
import { Search } from 'lucide-react';
import ProfileIcon from '../../../assets/svgs/profile-icon';
import HeartIcon from '../../../assets/svgs/heart-icon';
import HeaderBottom from './header-bottom';
import useUser from 'apps/user-ui/src/hooks/useUser';

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="w-full bg-white">
      <div className="w-[80%] py-5 m-auto flex items-center justify-between">
        <div>
          <Link href={'/'}>
            <span className="text-3xl font-[500]">Multivio</span>
          </Link>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search for products ... "
            className="w-full px-4 font-Poppins font-medium border-[2.5px] border-[#3489FF] outline-none h-[55px]"
          />
          <div className="w-[60px] cursor-pointer flex items-center justify-center h-[55px] bg-[#3489FF] absolute top-0 right-0">
            <Search color="#fff" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            {isLoading && user ? (
              <>
                <Link
                  href={'/profile'}
                  className="border-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#010f1c1a]"
                >
                  <ProfileIcon />
                </Link>
                <Link href={'/profile'}>
                  <span className="block font-[500] opacity-[.6]">Hello,</span>
                  <span className="font-[600]">
                    {user?.name?.split(' ')[0]}
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={'/login'}
                  className="border-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#010f1c1a]"
                >
                  <ProfileIcon />
                </Link>
                <Link href={'/login'}>
                  <span className="block font-[500] opacity-[.6]">Hello,</span>
                  <span className="font-[600]">
                    {isLoading ? ' ... ' : 'Sign In'}
                  </span>
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center gap-5">
            <Link href={'/wishlist'} className="relative">
              <HeartIcon />
              <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
                <span className="text-white font-medium text-sm">0</span>
              </div>
            </Link>
            <Link href={'/cart'} className="relative">
              <HeartIcon />
              <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
                <span className="text-white font-medium text-sm">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-b-[#99999938]" />
      <HeaderBottom />
    </div>
  );
};

export default Header;
