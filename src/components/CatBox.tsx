import { catStore } from "../store/catStore";

const CatBox = () => {
    const {smallCats, biggerCats} = catStore(state => state.cats)
    const increaseSmallCats = catStore(state => state.increaseSmallCats)
    const increaseBiggerCats = catStore(state => state.increaseBiggerCats)


return (
    <div className="box">
        <h1>Cat box</h1>

        <p>Small Cats: {smallCats}</p>
        <p>Big Cats: {biggerCats} </p>

        <button onClick={increaseSmallCats} type="button">Increase Small cats</button>
        <button onClick={increaseBiggerCats} type="button">Increase bigger cats</button>

    </div>
)

}

export default CatBox;