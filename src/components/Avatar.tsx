import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function AvatarComponent() {
  return (
    <Avatar>
  <AvatarImage src='/images/official.jpg' />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    
  )
}
