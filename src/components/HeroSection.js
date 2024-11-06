import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return(
        <section className="text-gray-600 my-10 body-font">
  <div className="container mx-auto flex  md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-3/4  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font  sm:text-4xl text-xl mb-4 font-semibold text-gray-900">
     DOCTOR APPOINTEMENT SYSTEM
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-4">
        <Link href={"/"}>
        <Button variant="outline" >
          Find Doctor You Need
        </Button>
        </Link>
        <Link href={"/doctors/apply"}>
        <Button >
          Apply As Doctor
        </Button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        
        height={400}
        width={400}
        src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  </div>
</section>

    )
}