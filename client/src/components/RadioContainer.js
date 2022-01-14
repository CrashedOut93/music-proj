import RadioCard from "./RadioCard"

function RadioContainer({radioList}) {
    return (
        <div>
        {radioList.map(radio => <RadioCard radioObj={radio} key={radio.name}/>)} 
        </div>
    )
}

export default RadioContainer
