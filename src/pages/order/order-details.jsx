export default function OrderDetails({ selectedIngredients, ingredients }) {
  const isEmptySelectedIngredients = selectedIngredients.length === 0;
  const countIngredients = (ingredientId) => {
    return selectedIngredients.filter((id) => id === ingredientId).length;
  };
  const uniqueIngredients = Array.from(new Set(selectedIngredients));
  return (
    <div>
      {!isEmptySelectedIngredients && ( 
        <div className="container mx-auto flex flex-col items-center text-center py-14">
          <h4 className="text-4xl font-medium">Selected Ingredients</h4>
          <ul className="text-slate-900 text-lg list-none flex flex-wrap justify-center gap-2">
            {uniqueIngredients.map((id, index) => (
              <li key={index}>
                {ingredients.find((item) => item?.id === id)?.name} x{countIngredients(id)}
              </li>
            ))}
          </ul>
      </div>)}
    </div>
  );
}