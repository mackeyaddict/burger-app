import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { formatNumber } from "../../utils/helper";

export default function OrderHeader({ ingredients = [], selectedIngredients = [], onReset}) {
  const isEmptySelectedIngredients = selectedIngredients.length === 0;
  console.log(selectedIngredients);

  const totalCost = () => {
    const filterBySelectedIngredients = selectedIngredients.map(
      (id) => ingredients.find((item) => item?.id === id)?.price
    );
    console.log(filterBySelectedIngredients);
    return `Rp${formatNumber(filterBySelectedIngredients.reduce((a, b) => a + b, 0))}`;
  };
  console.log (totalCost())
  return (
    <section className="container mx-auto py-14">
      <div className="flex justify-between items-center">
        {!isEmptySelectedIngredients && (
          <div>
            <h3 className="text-3xl font-bold">Total: {totalCost()}</h3>
          </div>
        )}
        <div className="flex items-center gap-4 ">
          <Link to="/order?done=true">
            <Button disabled={isEmptySelectedIngredients}>Order!</Button>
          </Link>
          {!isEmptySelectedIngredients && (
            <Button variant="danger" onClick={onReset}>Reset</Button>
          )}
        </div>
      </div>
    </section>
  );
}