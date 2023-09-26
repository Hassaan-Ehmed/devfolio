import React from 'react' 

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Hifz-ul-Quran</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, dolores laborum amet, alias ad magnam repellendus excepturi vitae consequuntur maxime, porro velit ea animi. Sed et tempora eaque? Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>School</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, dolores laborum amet, alias ad magnam repellendus excepturi vitae consequuntur maxime, porro velit ea animi. Sed et tempora eaque? Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>College</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, dolores laborum amet, alias ad magnam repellendus excepturi vitae consequuntur maxime, porro velit ea animi. Sed et tempora eaque? Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Institute</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, dolores laborum amet, alias ad magnam repellendus excepturi vitae consequuntur maxime, porro velit ea animi. Sed et tempora eaque? Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  