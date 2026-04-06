import { useBearStore } from "../store/bearStore";

const BearBox = () => {
 
    const {bears , increasPopulation, removeAllBears} = useBearStore();
    return (
        <div className="box">
            <h1>Bear Box
               
            </h1>
            <p> bears : {bears}</p>
            <button onClick={increasPopulation}>Add bear</button>
            <button onClick={removeAllBears}>Remove bear</button>
        </div>
    )
}

export default BearBox;