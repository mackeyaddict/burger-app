const Cheese = () => (
  <div className="bg-yellow-400 h-4 w-44 rounded-full"></div>
);
const Tomato = () => (
  <div className="flex gap-1 w-44">
    <div className="bg-red-500 h-4 w-full rounded-full" />
    <div className="bg-red-500 h-4 w-full rounded-full" />
    <div className="bg-red-500 h-4 w-full rounded-full" />
  </div>
);
const Lettuce = () => <div className="bg-green-400 h-4 w-40 rounded-full" />;
const Meat = () => <div className="bg-red-800 h-4 w-44 rounded-full" />;
const Pickles = () => (
  <div className="flex gap-1 w-36">
    <div className="bg-green-500 h-4 w-full rounded-full" />
    <div className="bg-green-500 h-4 w-full rounded-full" />
  </div>
);
const Mayo = () => <div className="bg-slate-400 h-4 w-36 rounded-full" />;
const Sauce = () => <div className="bg-red-600 h-4 w-36 rounded-full" />;
const Egg = () => <div className="bg-slate-300 h-4 w-44 rounded-full" />;

export const BreadTop = () => (
  <div className="bg-orange-200 h-20 w-60 rounded-t-full" />
);
export const BreadBottom = () => (
  <div className="bg-orange-200 h-10 w-60 rounded-b-full" />
);

export const Ingredients = ({type, onClickX}) => (
  <div className="relative">
    <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer hover:scale-[0.8]">
      X
    </div>
    {type === "cheese" && <Cheese />}
    {type === "meat" && <Meat />}
    {type === "lettuce" && <Lettuce />}
    {type === "tomato" && <Tomato />}
    {type === "pickles" && <Pickles />}
    {type === "mayo" && <Mayo />}
    {type === "sauce" && <Sauce />}
    {type === "egg" && <Egg />}
  </div>
);