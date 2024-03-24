import Image from "next/image";
import Login from './ui/loginfrom'
import {lusitana} from '@/app/ui/fonts'

export default function Page() {
  return (
    <div>
    <p className={lusitana.className}>Lusitana</p>
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <Image
          className="block md:hidden"
          src="/1710737521Bear21a.svg"
          alt="mobile"
          width={620}
          height={497}/>
    <Image 
     className="hidden md:block"
    src="/fighter.jpg" 
    alt="bear"
    width={1000}
    height={760}
    />
    </div>
   <Login/>
   </div>
  );
}
