import FoodList from "@/app/_components/FoodList";
import FoodProvider from "@/app/_components/FoodProvider";
import RQProvider from "./_components/RQProvider";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RQFoodList from "@/app/_components/RQFoodList"
export default function Home() {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json());
  // const foods = await foodReq.json();
  return (
    <RQProvider>
      <ErrorBoundary fallback={<div>something went wrong</div>}>
        <FoodProvider foodPromise={foodReq}>
          <main className="max-w-6xl mx-auto mt-5 text-3xl">
            <Suspense fallback={<div>Loading...</div>}>
              <FoodList />
            </Suspense>
            <RQFoodList/>
          </main>
        </FoodProvider>
      </ErrorBoundary>
    </RQProvider>  
  );
}
