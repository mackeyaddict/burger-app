export default function IngredientsPicker({ ingredients = [], manageIngredients, isReachMax}) {
  const disabledStyle = `bg-slate-400`

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {ingredients.map((item) => (
          <div key={item?.id} className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${isReachMax && disabledStyle}`} onClick={() => isReachMax ? null : manageIngredients(item?.id)}>
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{item?.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-9">
        {isReachMax && <h1 className="text-2xl">You reach the maximal quantity of ingredients</h1>}
      </div>
    </section>
  );
}