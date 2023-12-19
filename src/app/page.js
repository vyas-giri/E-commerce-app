import Image from 'next/image'
import Link from 'next/link';
import Slideshow from '@/components/Slideshow';


export default function Home() {

  return (
    <main className='bg-gray-950 pt-16'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 md:ml-32 md:mr-32 xl:ml-44 xl:mr-44'>
          <Slideshow/>
        </div>

      <section className="text-gray-400 body-font bg-gray-950">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ml-4 text-white">StyleSanctum</h1>
              <div className="h-1 ml-4 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Unique styles every month. For the fashion freaks!!!
            <br/>
      Style it your way!</p>
          </div>
          <div className="flex flex-wrap -m-4 bg-gray-950">
            <div className="md:w-1/3 p-4">
              <Link href={"/men"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 w-full object-cover object-center mb-6" src="/shirt-1.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Men</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
              <Link href={"/women"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 w-full object-cover object-center mb-6" src="/skirt-1.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Women</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            <div className="md:w-1/3 p-4">
            <Link href={"/accessories"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 w-full object-cover object-center mb-6" src="/watch-1.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Accessories</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            <Link href={"/accessories"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 w-full object-cover object-center mb-6" src="/watch-1.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Accessories</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            <div className="md:w-1/3 p-4">
            <Link href={"/men"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 w-full object-cover object-center mb-6" src="/jacket-2.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Men&apos;s Jackets</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
              <Link href={"/men"}>
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl">
                <img className="h-auto rounded-xl brightness-75 object-cover object-center mb-6" src="/jacket-1.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Jackets</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      </div>
    </main>
  )
}
