import Link from "next/link";

export default function Meal({params}){
  return (
    <>
      <h1>{params.mealSlug}</h1>
      <p><Link href = "../meals">Back to Meals</Link></p>
    </>
  );
}