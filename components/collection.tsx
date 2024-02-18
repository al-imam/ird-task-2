import { BookmarkIcon, ClockIcon, PinIcon } from "$icons";
import React from "react";

function getRandomNumbers(min: number, max: number, length: number): number[] {
  const randomNumbers: number[] = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

export function Collection({ className, ...rest }: React.ComponentProps<"div">) {
  return (
    <div className={"space-y-7 rounded-xl bg-muted-50 p-7 " + className} {...rest}>
      <div className="flex h-[38px] items-center justify-between">
        <h2 className="text-2xl font-bold">কালেকশন</h2>

        <div className="flex gap-1 rounded-md bg-muted-200 p-1">
          <button className="flex items-center gap-2 rounded-md bg-white p-1.5 shadow-sm">
            <ClockIcon className="h-[1.125rem] w-[1.125rem]" /> সর্বশেষ পঠিত দোয়া
          </button>
          <button className="flex items-center gap-2 rounded-md bg-transparent p-1.5">
            <BookmarkIcon /> বুকমার্কস
          </button>
          <button className="flex items-center gap-2 rounded-md bg-transparent p-1.5">
            <PinIcon /> পিনস
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {getRandomNumbers(5, 60, 6).map((num, i) => (
          <CollectionCard key={i} num={num} />
        ))}
      </div>
    </div>
  );
}

function CollectionCard({ num }: { num: number }) {
  return (
    <div className="rounded-10px space-y-4 bg-white p-4">
      <ClockIcon />
      <div className="space-y-1">
        <span className="text-base font-semibold">দোয়ার গুরুত্ব</span>
        <p className="flex gap-1 text-xs">
          <span>সর্বশেষ পঠিত দোয়া নং</span> <span>{num}</span>
        </p>
      </div>
    </div>
  );
}
