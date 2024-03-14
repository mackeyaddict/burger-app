import { useState, useEffect } from "react";
import OrderDisplay from "./order-display";
import OrderHeader from "./order-header";
import IngredientsPicker from "./ingredients-picker";
import Navbar from "../../Components/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const ingredients = [
  {
    id: "cheese",
    name: "Cheese",
    price: 5000
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 1000
  },
  {
    id: "tomato",
    name: "Tomato",
    price: 2500
  },
  {
    id: "pickles",
    name: "Pickles",
    price: 2000
  },
  {
    id: "meat",
    name: "Meat",
    price: 14000
  },
  {
    id: "mayo",
    name: "Mayo",
    price: 4000
  },
  {
    id: "sauce",
    name: "Sauce",
    price: 4000
  },
  {
    id: "egg",
    name: "Egg",
    price: 8000
  },
];

export default function Order() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isReachMax, setIsReachMax] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const {search} = useLocation()

  function manageIngredients(type, id, idx) {
    if (type === "add") {
      setSelectedIngredients((prev) => [...prev, id]);
    }
    if (type === "remove") {
      setSelectedIngredients((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }

  useEffect(() => {
    if(selectedIngredients.length >= 10) {
      setIsReachMax(true);
    }
    else {
      setIsReachMax(false);
    }
  },[selectedIngredients])

  useEffect( ()=>{
    if (new URLSearchParams(search).get("done") === "true"){
      setIsDone(true);
    }
    else {
      setIsDone(false);
      setSelectedIngredients([]);
    }
  }, [search])

  if(isDone) return (
    <section>
      <div className=" h-screen mx-auto justify-center items-center flex">
        <div className="container mx-auto flex flex-col gap-6 justify-center items-center text-center">
          <h1 className="text-6xl font-bold text-green-600">Thank You!</h1>
          <h2 className="text-4xl font-bold text-green-600">Your order has been received!</h2>
          <div className="max-w-80 w-full flex justify-between">
            <Link to="/order">
              <Button>Order again?</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">Back To Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <section>
      <Navbar/>
      <OrderHeader ingredients={ingredients} selectedIngredients={selectedIngredients} onReset={() => setSelectedIngredients([])} />
      <div className="container h-[calc(100vh-242px)] mx-auto justify-evenly items-center md:flex">
        <OrderDisplay selectedIngredients={selectedIngredients} removeIngredient={(idx) => manageIngredients("remove", undefined, idx)} />
        <IngredientsPicker ingredients={ingredients} manageIngredients={(id) => manageIngredients("add", id)} isReachMax={isReachMax} />
      </div>
    </section>
  );
}