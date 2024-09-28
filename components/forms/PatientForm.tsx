"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form} from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"
import { Input } from "../ui/input"

 export enum FormFieldType{
  INPUT = 'Input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'PHONEinput',
  CHECKBOX = 'checkbox',
  DATE_PICKER ='datePicker',
  SELECT =  'select',
  SKELETON = 'skeleton',


 }
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm =()=> {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section mb-12 space-y-4>
            <h1 className="header"> Hi there 👋</h1>
            <p className="test-dark-700 ">Schedule your first appointment </p>

        </section>

        <CustomFormField

        fieldType={FormFieldType.INPUT}
        control = {form.control}
        name= 'name'
        label='Full name'
        placeholder= "john doe"
        iconSrc= "assets/icons/user.svg"
        iconAlt="user"

        />
    
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default PatientForm