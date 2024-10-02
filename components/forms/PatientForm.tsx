"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form} from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"

import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import {useRouter} from "next/navigation"



 export enum FormFieldType{
  INPUT = 'Input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'PHONEinput',
  CHECKBOX = 'checkbox',
  DATE_PICKER ='datePicker',
  SELECT =  'select',
  SKELETON = 'skeleton',


 }

 
const PatientForm =()=> {

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name:"",
      email:"",
      phone:"",


    },
  })
 
  const [isLoading,setisLoading]= useState(false)
  const router = useRouter()
  
  async function onSubmit(name,email,phone: z.infer<typeof UserFormValidation>) {
    
    setisLoading(true);

    try{
      // const userData = {
      //   name, 
      //   email,
      //   phone,

      // };

      // const user = await CreateUser(userData);

      
      
      
      // if(user) router.push(`/patient/${user.$id}/register`)

    }   catch(error){
      console.log(error)
    }


    
   
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section className= "mb-12 space-y-4">
            <h1 className="header"> Hi there,....👋</h1>
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

<CustomFormField

fieldType={FormFieldType.INPUT}
control = {form.control}
name= 'email'
label='Email'
placeholder= "johndoe@patient.com"
iconSrc= "assets/icons/email.svg"
iconAlt="email"

/>

<CustomFormField

fieldType={FormFieldType.PHONE_INPUT}
control = {form.control}
name= 'phone'
label='Phone number'
placeholder= "+250 788 888 88"
iconSrc= "assets/icons/email.svg"
iconAlt="Phone"

/>
    
    <SubmitButton 
    isLoading={isLoading}
    > Get Started </SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm