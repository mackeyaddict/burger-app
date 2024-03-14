import {Link} from 'react-router-dom';
import Button from '../../Components/Button';

const listCTA = [
  {
    name: "Order Now!",
    link: "/order",
    variant: "primary",
  },
  {
    name: "About US",
    link: "/about-us",
    variant: "secondary",
  },
  {
    name: "Feedback",
    link: "/feedback",
    variant: "secondary",
  },
];

export default function HomelistCTA() {
  return (
    <section>
      <div className='h-[calc(100vh-446px)] flex flex-col justify-center'>
        <div className='flex flex-col w-48 mx-auto gap-16'>
          {listCTA.map((item, i) => (
            <Link key={i} to={item?.link}>
              <Button variant={item.variant}>{item?.name}</Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}