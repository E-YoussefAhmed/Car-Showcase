import { CustomFilter, Hero, SearchBar } from "@/components";
import { AllCars } from "@/components/AllCars";
import { Loader } from "@/components/Loader";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <AllCars {...searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
