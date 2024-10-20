"use client";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormFieldType } from "../forms/PatientForm";

import { Control } from "react-hook-form";
import Image from "next/image";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // For styling


interface CustomeProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomeProps }) => {
  const { fieldType, iconSrc, iconAlt, placeholder } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          {/* Render Input field here */}
          <Input placeholder={placeholder} {...field} />
        </div>
      )
    case FormFieldType.PHONE_INPUT:
        return(
          <FormControl>
            <PhoneInput
            defaultCountry="US"
            placeholder={placeholder}
            international
            withCountryCallingCode 
            value={field.value as E16Number | undefined}
            onChange={field.onChange}
            className="input-phone"/>
          </FormControl>
        )
    case FormFieldType.DATE_PICKER:
      return(
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image src="assets/icons/calender.svg"
          height={24}
          width={24}
          alt="calender"
          className="ml-2"
          />
          <FormControl>
            
          </FormControl>
        </div>
      )    

    default:
      break;  
  }
};

const CustomFormField = (props: CustomeProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
