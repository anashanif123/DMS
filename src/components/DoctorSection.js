
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { categories, doctors } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AccessTimeFilledOutlined, LocalHospital, WcOutlined } from "@mui/icons-material";



export default function DoctorSection({ isHome }) {
  let filter = isHome ? doctors.slice(0, 6) : doctors;

  return (
    <div className="container mx-auto my-10 ">
      <div className=" flex justify-between py-3">
        <h1 className="text-3xl font-bold ">DOCTORS</h1>
        {isHome ? (
          <Link href={"/doctors"}>
            <Button>See ALL</Button>
          </Link>
        ) : (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3  gap-3">
        {filter.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader className={"flex flex-row  "}>
              <Avatar className="self-center h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DAS</AvatarFallback>
              </Avatar>
              <div className="pl-3">
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.category}</CardDescription>
              </div>
            </CardHeader>
{
  !isHome &&

            <CardContent>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                <WcOutlined/>
                  <h1 className="font-semiboldnpm i @radix-ui/react-icons">
                    Gender
                  </h1>
                </div>
                <h1>{doctor.gender}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                  <LocalHospital/>
                  <h1 className="font-semiboldnpm i @radix-ui/react-icons">
                    Hospital
                  </h1>
                </div>
                <h1>{doctor.hospital}</h1>
              </div>
              <div className="flex justify-between my-2 ">
                <div className="flex gap-2 items-center">
                  <AccessTimeFilledOutlined/>
                  <h1 className="font-semiboldnpm i @radix-ui/react-icons">
                    AppointementTime
                  </h1>
                </div>
                <h1>{doctor.appointmentTime}</h1>
              </div>
            </CardContent>
}
            <CardFooter>
              <Link href={`/doctors/${doctor.id}`}>
              
              <Button >
                Book Appointement
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
