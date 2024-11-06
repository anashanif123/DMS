"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// Define the schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
  bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio must be at most 120 characters"),
  hospital: z.string().min(2, "Hospital must be at least 2 characters").max(50, "Hospital must be at most 50 characters"),
  days: z.array(z.string()).nonempty("Select at least one day"),
  fees: z.string().nonempty("Fees are required"),
  gender: z.string().nonempty("Gender is required"),
  appointmentTime: z.string().nonempty("Appointment time is required"),
  degree: z.string().nonempty("Degree is required"),
  specialization: z.string().nonempty("Specialization is required"),
  experience: z.string().nonempty("Experience is required"),
});

// Component for the form
export default function DoctorForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
    },
  });

  // Submit handler
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input {...field} placeholder="Enter your name" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="bio"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl><Input {...field} placeholder="Enter a short bio" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="hospital"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital</FormLabel>
              <FormControl><Input {...field} placeholder="Enter hospital name" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
  name="days"
  control={form.control}
  render={({ field }) => (
    <FormItem>
      <FormLabel>Available Days</FormLabel>
      <div className="flex space-x-2">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
          <label key={day} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={day}
              checked={field.value.includes(day)}
              onChange={(e) =>
                field.onChange(
                  e.target.checked
                    ? [...field.value, day]
                    : field.value.filter((d) => d !== day)
                )
              }
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>{day}</span>
          </label>
        ))}
      </div>
      <FormMessage />
    </FormItem>
  )}
/>


        <FormField
          name="fees"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fees</FormLabel>
              <FormControl><Input {...field} placeholder="Enter consultation fees" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="gender"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="appointmentTime"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appointment Time</FormLabel>
              <FormControl><Input type="time" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="degree"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl><Input {...field} placeholder="Enter your degree" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="specialization"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl><Input {...field} placeholder="Enter your specialization" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="experience"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl><Input {...field} placeholder="Enter years of experience" /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-full">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
