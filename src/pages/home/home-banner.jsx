export default function HomeBanner() {
  return (
    <section>
      <div className="bg-green-600 ">
        <div className="container mx-auto flex flex-col items-center justify-center text-center w-screen gap-10 py-16">
          <h1 className="text-6xl font-bold text-white">Welcome To BurgerApp</h1>
          <p className="text-white max-w-96">Temukan berbagai pilihan burger lezat dengan sekali sentuh. Nikmati pengalaman pemesanan yang cepat dan aman. Bergabunglah dengan komunitas kami untuk menikmati promo eksklusif.</p>
        </div>
      </div>
    </section>
  );
}