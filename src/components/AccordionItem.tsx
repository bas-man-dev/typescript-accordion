import { useEffect, useRef, useState } from "react"
import { AccordionData } from "../types"
import "./AccordionItem.css"

function AccordionItem({ 
  data, 
  isOpen,
  btnOnClick,
}: { 
    data: AccordionData, 
    isOpen: boolean 
    btnOnClick: () => void,
  }) {
      const contentRef = useRef<HTMLDivElement>(null)
      const [height, setHeight] = useState(0)

      useEffect(() => {
        if (isOpen) {
          const contentEl = contentRef.current as HTMLDivElement

          setHeight(contentEl.scrollHeight)
        } else {
          setHeight(0)
        }
      }, [isOpen])

  return (
    <>
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
    <dt>
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn" onClick={btnOnClick}>
          {data.title}
        </button>
      </h2>
      </dt>
      <dd>
      <div className="accordion-item-container" style={{ height }}>
        <div ref={contentRef} className="accordion-item-content">
          {data.content}
        </div>
      </div>
      </dd>
    </div>

    </>

  )
}

export default AccordionItem