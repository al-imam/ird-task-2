import { Collection } from "$components/collection";
import { Hero } from "$components/hero";

export default function HOME() {
  return (
    <div className="container">
      <Hero />
      <div className="flex">
        <Collection />
      </div>
    </div>
  );
}
