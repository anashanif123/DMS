
import { columns } from "@/components/appointeentTable/column";
import { AppointmentTable } from "@/components/appointeentTable/data-table";
import { appointments } from "@/lib/data";

export default function Appointments() {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <AppointmentTable columns={columns} data={appointments} />
      </div>
    </div>
  );
}