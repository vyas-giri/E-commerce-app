import Image from 'next/image'
import Slideshow from '@/components/Slideshow';
import Link from 'next/link';


export default function Home() {
  return (
    <main className='bg-gray-900'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 md:ml-32 md:mr-32 xl:ml-44 xl:mr-44'>
          <Slideshow/>
        </div>

      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">StyleSanctum</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Unique styles every month. For the fashion freaks!!!
            <br/>
      Style it your way!</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link href={"/cargos"}>
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Cargos</h3>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <Link href={"/tees"}>
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Tees</h3>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <Link href={"/hoodies"}>
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Hoodies</h3>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <Link href={"/accessories"}>
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">Explore Accessories</h3>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
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
