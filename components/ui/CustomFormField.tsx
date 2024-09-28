"use client"

import { Input } from "@/components/ui/input"
import{
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormControl,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormDescription,
FormField,
FormItem,
FormLabel,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormMessage,
} from "@/components/ui/form"
import { FormFieldType } from "../forms/PatientForm"
import { Label } from "./label"

import {Control} from "react-hook-form"
import Image from "next/image"
 
interface CustomeProps{
    control:control<any>,
    fieldType : FormFieldType,
    name:string,
    label?:string,
    placeholder?:string,
    iconSrc?:string,
    iconAlt:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?:( field: any) => React.ReactNode,
}

const RenderField =( {field,props}:{field:any; props :CustomeProps })=>{
  const {fieldType,iconSrc,iconAlt,placeholder}=props;

 switch(fieldType){
  case FormFieldType.INPUT:
    return(
      <div className="flex rounded-md border border-dark-500 bg-dark-400">
        {iconSrc &&(
          <Image 
          src={iconSrc}
          height= {24}
          width ={24}
          alt={iconAlt||'icon'}
          className="ml-2"


          />

        )}


      </div>
    )

 }

}
 const  CustomFormField = (props:CustomeProps) => {
  const {control, fieldType, name ,label}=props;
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldType !== FormFieldType.CHECKBOX && Label (
              <FormLabel >{Label}</FormLabel>
            )}

            <RenderField field={field} props = {props} />

            <FormMessage className="shad-error" />

          </FormItem>
         
        )}
      />
  )
}

export default CustomFormField