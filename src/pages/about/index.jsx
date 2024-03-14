import burgerAbout from '../../assets/burger-man.jpg';
import Navbar from '../../Components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-green-600">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-screen gap-8 md:gap-40 px-4 md:px-0">
            <div className="w-full md:w-1/2 shadow-2xl">
              <img src={burgerAbout} alt="burger-man" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-6 md:w-1/2 text-white">
              <h1 className="font-bold text-4xl md:text-6xl text-center md:text-left">About Us</h1>
              <h3 className="text-xl md:text-2xl text-center md:text-left">Welcome to BurgerAPP, where passion for burgers meets cutting-edge technology. Our app is not just about ordering a meal; it&rsquo;s an experience that transcends the ordinary.</h3>
              <p className="text-sm md:text-base text-center md:text-left">At BurgerAPP, we believe that a burger is not just a quick bite; it&rsquo;s an expression of culinary creativity and a source of pure joy. Our app is designed to bring you the ultimate burger experience, where every patty is a canvas, and every topping is a stroke of flavor genius. Whether you&rsquo;re a classic cheeseburger enthusiast or an adventurous flavor explorer, BurgerAPP caters to all tastes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
