"use client"

import { Input } from "@/components/ui/input"
import{
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"

interface CustomeProps{
    control:control<any>,
}

const CustomFormField = ({control}:CustomeProps) => {
  return (
    <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
  )
}

export default CustomFormField