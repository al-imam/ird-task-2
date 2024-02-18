import { ArrowBoldIcon } from "$icons";

export function Categories() {
  return (
    <div className="mt-[5.3125rem]">
      <div className="flex h-[38px] items-center justify-between">
        <h2 className="text-2xl font-bold">রুকিয়ার ক্যাটাগরিসমূহ</h2>

        <button className="flex h-[1.875rem] items-center gap-2 rounded-full bg-muted-200 px-4 py-2 font-medium">
          সবগুলো দেখুন
          <ArrowBoldIcon className="-rotate-90" />
        </button>
      </div>
    </div>
  );
}
