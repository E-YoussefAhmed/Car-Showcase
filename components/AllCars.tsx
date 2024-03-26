import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";
import { CarCard, ShowMore } from ".";

export const AllCars = async ({
  model,
  make,
  year,
  fuel,
  limit,
}: FilterProps) => {
  const allCars = await fetchCars({
    model: model || "",
    make: make || "",
    year: year || 2022,
    fuel: fuel || "",
    limit: limit || 10,
  });
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard key={car.make + car.model} car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(limit || 10) / 10}
            isNext={(limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </>
  );
};
