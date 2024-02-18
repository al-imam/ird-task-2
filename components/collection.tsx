import { ClockIcon } from "$icons";

function getRandomNumbers(min: number, max: number, length: number): number[] {
  const randomNumbers: number[] = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

export function Collection() {
  return (
    <div className="space-y-10 rounded-xl bg-muted-50 p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">কালেকশন</h2>

        <div className="bg-muted-200 flex gap-1.5 rounded-md p-1">
          <button className="flex gap-2 rounded-md bg-white p-2 shadow-sm">
            <ClockIcon /> সর্বশেষ পঠিত দোয়া
          </button>
          <button className="flex gap-2 rounded-md bg-transparent p-2">
            <ClockIcon /> সর্বশেষ পঠিত দোয়া
          </button>
          <button className="flex gap-2 rounded-md bg-transparent p-2">
            <ClockIcon /> সর্বশেষ পঠিত দোয়া
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
        <p className="flex gap-1 text-sm">
          <span>সর্বশেষ পঠিত দোয়া নং</span> <span>{num}</span>
        </p>
      </div>
    </div>
  );
}
