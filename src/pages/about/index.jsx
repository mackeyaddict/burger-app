import burgerAbout from '../../assets/burger-man.jpg'
import Navbar from '../../Components/Navbar'

export default function About () {
  return (
    <>
      <Navbar/>
      <section>
        <div className="bg-green-600">
          <div className='container mx-auto flex justify-center items-center h-[calc(100vh-72px)] w-screen gap-40'>
            <div className='w-full shadow-2xl'>
              <img src={burgerAbout} alt="burger-man" />
            </div>
            <div className='flex flex-col gap-10 w-[100rem] text-white'>
              <h1 className='text-6xl'>About Us</h1>
              <h3 className='text-2xl'>Welcome to BurgerAPP, where passion for burgers meets cutting-edge technology. Our app is not just about ordering a meal it&apos;s an experience that transcends the ordinary</h3>
              <p className='text-xl'>At BurgerAPP, we believe that a burger is not just a quick bite; it&apos;s an expression of culinary creativity and a source of pure joy. Our app is designed to bring you the ultimate burger experience, where every patty is a canvas, and every topping is a stroke of flavor genius. Whether you&rsquo;re a classic cheeseburger enthusiast or an adventurous flavor explorer, BurgerAPP caters to all tastes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}