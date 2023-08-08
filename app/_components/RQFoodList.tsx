"use client";
import { useQuery } from "@tanstack/react-query";
import { useFoodPromise } from "./FoodProvider";
export default function FoodList() {
  const foodPromise = useFoodPromise();
  console.log(foodPromise);
  const { data: foods, isFetching } = useQuery(["foods"], () => foodPromise);
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div>RQ Foods: {foods?.join(", ")}</div>
  );
}
