"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomFormField from "../ui/CustomFormField";
import SubmitButton from "../ui/SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";




const RegisterForm = ({user}:{user:User}) => {
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setisLoading(true);

    try {
      const userData = {
        name,
        email,
        phone,
      };

      const user = await createUser(userData);
      console.log(user)
      if (user) {
        console.log(user.$id);
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Ensure loading state is stopped after the API call
      setisLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <section className=" space-y-4">
          <h1 className="header">Welcome,....👋</h1>
          <p className="test-dark-700">Let us know more about yourself</p>
        </section>
        <section className=" space-y-6">
            <div className="mb-9 space-x-1">
          <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>
          

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="john doe"
          iconSrc="assets/icons/user.svg"
          iconAlt="user"
        />

       

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
