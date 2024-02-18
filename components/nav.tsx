import LogoImg from "$/public/icons/dua-logo.svg";
import { ArrowBoldIcon, LightThemeIcon } from "$icons";
import { DoubleHeartIcon } from "$icons/heart-icons";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <div className="h-nav container my-6 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Image src={LogoImg} alt="logo" className="h-nav object-contain" />
          <span className="text-2xl font-bold">দোয়া রুকিয়া</span>
        </div>

        <ul className="flex gap-8 text-base">
          <li>
            <Link className="font-semibold" href="/">
              হোম
            </Link>
          </li>
          <li>
            <Link href="#">সকল ক্যাটাগরি</Link>
          </li>
          <li>
            <Link href="#">সকল দোয়া</Link>
          </li>
          <li>
            <Link href="#">দোয়ার বই</Link>
          </li>
          <li>
            <Link href="#">রুকিয়া</Link>
          </li>
          <li>
            <button className="flex items-center gap-[0.25rem]">
              অন্যান্য <ArrowBoldIcon />
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-6 text-base">
          <button className="border-secondary-outline flex aspect-square h-10 w-10 items-center justify-center rounded-[0.625rem] border-2">
            <LightThemeIcon />
          </button>
          <button className="primary-btn border-primary-outline flex items-center gap-1.5 rounded-[0.625rem] border-2 px-5 py-2.5 text-base text-white">
            সাপোর্ট করুন <DoubleHeartIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
