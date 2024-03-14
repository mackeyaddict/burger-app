import { BreadBottom, BreadTop, Ingredients } from "./ingredients";

export default function OrderDisplay({ selectedIngredients = [], removeIngredient}) {
  return (
    <section className="container mx-auto flex justify-center mb-14">
      <div className="flex flex-col gap-1 items-center">
        <BreadTop />
        {selectedIngredients.reverse().map((id,idx) => (
          <Ingredients key={idx} type={id} onClickX={() => removeIngredient(idx)} />
        ))}
        <BreadBottom />
      </div>
    </section>
  );
}