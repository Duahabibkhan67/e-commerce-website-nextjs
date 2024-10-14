import Image from "next/image";

export default function Home() {
  return (
   <div>
 <header className="flex justify-between bg-gray-100" >
        <div className="ms-2">
          <h1 className="text-5xl ms-2 my-3 text-emerald-900"><b>FASHION WEBSITE</b></h1>
        </div>
        <div className="mx-12 flex justify-between">
          <button className="ms-9 text-2xl my-3  hover:scale-105"><b>Home</b></button>
        <button className="ms-9 text-2xl my-3 hover:scale-105">About</button>
        <button className="ms-9 text-2xl  my-3 hover:scale-105">Contact us</button>

        
        </div>
      </header>
   <section className="bg-blue-200 w-10/2 ml-12 mr-12 rounded-2xl ">
 <h1 className="my-9 text-7xl font-sans text-slate-950 mx-14  "><b>Buy your <br />Dream Plants</b></h1>
 <div className="grid grid-flow-col mx-16 mt-px">
  <p className="text-4xl mx-7 my-9"><b>50+</b> <br />PLant species</p>
  <p className="text-4xl mx-5 my-9 "><b>100+</b> <br />Customers</p>
  <button className="ms-2 text-2xl my-6 mx-11 hover:scale-110">Shop Now-</button>
<Image className="bg-black rounded-t-full" width={250} height={400} src="/flowerpot.png" alt="flowerpot" />
</div>


   </section>
<section className="grid grid-cols-4 mx-16 mt-px">
  <div className="my-10">
    <h1 className="text-5xl my-2"><b>Best Selling <br /> Plant</b></h1>
    <p>For your home made unique</p>
  <button className="text-2xl mx-11 bg-blue-200 my-3 hover:scale-110 cursor-pointer"><b>See more</b> </button>
  </div>
  <div className="my-10 ">
<Image className="bg-gray-200 rounded-2xl hover:scale-105 cursor-pointer" width={300}   height={200} src="/pot-1.png" alt="pot-1" />
<h2 className="text-2xl my-4"><b>Natural Plant</b></h2>
<p>PKR 400rs</p>
  </div>
  <div className="my-10 ms-8 ">
 <Image className="bg-slate-300 rounded-2xl hover:scale-105 cursor-pointer "        width={200}     height={600}   src="/pot-2.png" alt="pot2" />
 <h2 className="text-2xl my-4"><b>Artificial Plant</b></h2>
 <p>PKR 1000rs</p>
  </div>
  <div className="my-10 ms-8 ">
    <Image className="bg-slate-300 rounded-2xl hover:scale-105 cursor-pointer "   width={500}   height={100}     src="/pot-3.png" alt="pot3"/>
    <h2 className="text-2xl my-8"><b>Beautiful Colourful Flower Pot</b></h2>
    <p>PKR 1500rs</p>
  </div>
</section>
<section>
  <div className="flex justify-center">
    <h1 className="my-4 text-5xl font-sans "><b>About us</b></h1>
  </div>
  <div className="flex justify-center">
    <p className="my-3 text-1.5xl">Order now and the oppourtunites beauty of plants</p>
  </div>
</section>
<section className="grid grid-cols-3 mx-16 mt-px">
  <div className="my-10 ms-8">
<img className="h-20 bg-blue-300 rounded-full ms-12 hover:scale-110 cursor-pointer" src="/pot-4.png" alt="pot-4" />
<h1 className="my-3 text-3xl font-sans"><b>Large Asserment</b></h1>
<p className="my-3 ms-0 text-1.5xl">We offer many different type of products <br /> with ever variations in each category</p>
  </div>
  <div className="my-10 ms-8">
<img className="h-20 bg-blue-300 rounded-full ms-12 hover:scale-110 cursor-pointer" src="/cube.png" alt="cube" />
<h1 className="my-3 text-3xl font-sans"><b>Fast & Free Shiping</b></h1>
<p>Four day & less delivery time,free shiping & on exppended delivery oppson.</p>
  </div>
  <div className="my-10 ms-8">
<img  className="rounded-full bg-blue-300 h-20 ms-12 hover:scale-110 cursor-pointer"src="/cll-1.png" alt="cll" />
<h1 className="my-3 text-3xl font-sans"><b>24/7 Support</b></h1>
<p>answer to any business related inquiry 24/7 end in real-time</p>
  </div>
</section>
   </div>
  );
}
