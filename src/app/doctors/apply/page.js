import DoctorForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";


export default async function ApplyAsDoctor() {
    const session =await auth();
        return(
        <div className="container mx-auto" >
           <h1 className="font-bold text-2xl" >Apply As A Doctor In Our Platfrm </h1>  
           <p className="text-secondary-foreground mt-5" >Our system offers an easy way to book appointments with experienced doctors across a wide range of specialties. Whether youre looking for a general consultation, a specialist visit, or follow-up care, weve made it simple to find the right doctor and book your appointment online.</p>  
            <DoctorForm session={session}/>
        </div>
    )
}