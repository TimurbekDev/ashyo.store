import Products from "@/components/Products";
import Brend  from "@/module/Brend";
import Hero from "@/module/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <Brend />
      <Products extraClass="hidden sm:block" title="Most popular product" API='/product-item' />
      <Products title="Most popular product" API='/product-item'/>
    </>
  );
}
