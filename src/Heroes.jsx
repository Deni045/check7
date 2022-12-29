import { useState } from "react"



function Heroes(){

    
    const [names, setNames] = useState ([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
      ])

      const handleDelete = (index) => {
        const namee = name.filter((value, i) => i !== index)
     
         setNames(namee)
       }
     
     
     const name = names.map((namer, index ) =>
       <li key={index} onClick={() => handleDelete(index)} >{namer}</li>
     )

    
    return(
        <div>

    <ul >{name}</ul>  

        </div>
    )
}

export default Heroes