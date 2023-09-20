import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="Home">Home</TabsTrigger>
        <TabsTrigger value="About">About</TabsTrigger>
        <TabsTrigger value="Resume">Resume</TabsTrigger>
        <TabsTrigger value="Contact">Contact</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
