import React,{useEffect} from 'react';
import CategoryCard from './CategoryCard';
import phones from '../Categories/smartphones.jpg';
import laptops from '../Categories/laptops.jpg';
import headphone from "../Categories/Headphones.jpg";
import accessories from '../Categories/accessories.png';

function CategoryCont() {

  useEffect(() => {
    document.title = "TechMart - Products";
  }, []);

  return (
    <div className="py-5">
      <div className="w-4/5 mx-auto">
        <h4 className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-medium px-5">
          Shop by Category
        </h4>
      </div>
      <div className="w-4/5 grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-2 mx-auto gap-10">
        <CategoryCard
          img={phones}
          txt="Elevating Every Swipe and Tap"
          title="SmartPhones"
          link="/cellphones"
        />
        <CategoryCard
          img={laptops}
          txt="Sleek and lightweight design"
          title="Portable Computing"
          link="/laptop"
        />
        <CategoryCard
          img={headphone}
          txt="Emphasizing the immersive sound quality"
          title="Wireless Headphones"
          link="/headphones"
        />
        <CategoryCard
          img={accessories}
          txt="Empowering Every Keystroke and Click"
          title="TechEase Accessories"
          link="/accessories"
        />
      </div>
    </div>
  );
}

export default CategoryCont;
