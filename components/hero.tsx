import heroImage from "$/public/images/hero.png";
import { MouseIcon, SearchHeartIcon, SearchIcon } from "$icons";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative grid grid-cols-2 items-center text-foreground">
      <div className="space-y-3">
        <p className="rounded-10px w-max bg-muted-100 px-4 py-2.5 text-sm font-semibold">
          আস-সালামু 'আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারকাতুহু
        </p>

        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-normal">দোয়া ও যিকরঃ কুরআন মাজীদের রাব্বানা দোয়া এবং মাসনূন আমল</h1>

          <p className="font-anek text-base">
            এই ওয়েবসাইট থেকে আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ পেয়ে যাবেন ১৯ ক্যাটাগরির রুকিয়া এবং অডিও
            রুকিয়া
          </p>

          <div className="flex flex-col gap-1">
            <div className="border-secondary-outline rounded-10px flex max-w-[418px] items-center gap-2 border-2 bg-white p-1.5 pl-4">
              <SearchHeartIcon className="mr-1" />
              <input
                type="text"
                placeholder="এখানে দোয়া সার্চ করুন...."
                className="min-w-full flex-grow text-sm [all:unset] placeholder:text-sm"
              />
              <button className="primary-btn border-primary-outline rounded-10px ml-auto flex items-center gap-1.5 border-2 px-5 py-2 text-sm font-semibold text-white">
                সার্চ করুন <SearchIcon />
              </button>
            </div>
            <span className="text-xs font-medium leading-loose">
              আপনার জানা এবং অজানা সকল দোয়া এখানে সার্চ করতে পারবেন ---
            </span>
          </div>
        </div>

        <div className="absolute bottom-[147px] flex items-center gap-3 font-medium">
          <MouseIcon />
          <span>স্ক্রল করুন</span>
        </div>
      </div>
      <Image src={heroImage} alt="hero-image" className="mix-blend-darken" />
    </div>
  );
}
