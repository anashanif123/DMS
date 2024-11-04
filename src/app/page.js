import DoctorSection from "@/components/DoctorSection";
import Header from "@/components/Header";
import Hero from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen">
     <Hero/>
     <DoctorSection isHome={true}/>
    </div>
  );
}
