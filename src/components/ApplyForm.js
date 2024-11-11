"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { addRequest } from "@/actions/requests";

// Define the schema using Zod
const formSchema = z.object({
  bio: z
    .string()
    .min(2, "Bio must be at least 2 characters")
    .max(120, "Bio must be at most 120 characters"),
  hospital: z
    .string()
    .min(2, "Hospital must be at least 2 characters")
    .max(50, "Hospital must be at most 50 characters"),
  fees: z.string().nonempty("Fees are required"),
  gender: z.string().nonempty("Gender is required"),
  appointmentTime: z.string().nonempty("Appointment time is required"),
  degree: z.string().nonempty("Degree is required"),
  specialization: z.string().nonempty("Specialization is required"),
  experience: z.string().nonempty("Experience is required"),
  address: z
    .string()
    .min(2, "Address must be at least 2 characters")
    .max(100, "Address must be at most 100 characters"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be at most 15 digits")
    .regex(/^\d+$/, "Contact number must be numeric"),
});

// Component for the form
export default function DoctorForm({ session }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      hospital: "",
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      address: "",
      contactNumber: "",
    },
  });

  // Submit handler
  async function onSubmit(values) {
    console.log(values);
    values.user = session.user._id;
    const response = await addRequest(values);
console.log("responsse =>",response);

    if (response.error) {
      form.reset,
        toast({
          title: "sorry Your Application  Is aleady submitted Submitted.",
          description: "You Will Be Inform By Email IN 3 Business Days.",
        });
    } else {
      form.reset,
        toast({
          title: "Yur Application Is Submitted.",
          description: "You Will Be Inform By Email IN 3 Business Days.",
        });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <FormField
          name="hospital"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter hospital name" />
              </FormControl>
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
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue=""
              >
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
          name="degree"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your degree" />
              </FormControl>
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
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
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
              <FormControl>
                <Input {...field} placeholder="Enter your specialization" />
              </FormControl>
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
              <FormControl>
                <Input {...field} placeholder="Enter years of experience" />
              </FormControl>
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
              <FormControl>
                <Input type="number" {...field} placeholder="Enter fees" />
              </FormControl>
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
              <FormControl>
                <Textarea {...field} placeholder="Write a short bio" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="contactNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your contact number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {form.formState.isSubmitting ? "Loading" : "submit"}
        </Button>
      </form>
    </Form>
  );
}
