import { AudioPlayer } from "$components/audio";
import { Categories } from "$components/categories";
import { Collection } from "$components/collection";
import { Hero } from "$components/hero";
import { ArrowBoldIcon } from "$icons";

export default function HOME() {
  return (
    <div className="container">
      <Hero />
      <div className="flex gap-6">
        <Collection className="flex-1" />
        <AudioPlayer />
      </div>
      <Categories />
    </div>
  );
}
