import { AccordionData } from "../types"
import AccordionItem from "./AccordionItem"
import "./Accordion.css"
import { useState } from "react"

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const btnOnClick = (index: number) => {
    setCurrentIndex((currentValue) => currentValue !== index ? index : -1)
  }

  return (
    <>
    <dl className="accordion">
      {
        items.map((item, index) => (
          <AccordionItem 
            key={index} 
            data={item} 
            isOpen={index ===  currentIndex} 
            btnOnClick={() => btnOnClick(index)}
          />
        )) 
      }
    </dl>
    </>
  )
}

export default Accordion