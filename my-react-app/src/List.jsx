function List(){

const fruits = [{id: 1, name: "apple", calories: 95}, 
                {id: 2, name:"orange", calories: 45}, 
                {id: 3, name: "banana", calories: 105}, 
                {id: 4, name:"coconut", calories: 37}, 
                {id: 5, name:"pineapple", calories: 45}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    fruits.sort((a, b) => a.calories - b.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);

const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
                                        {lowCalFruits.name}: &nbsp;
                                        <b>{lowCalFruits.calories}</b></li>);

return(<ol>{listItems}</ol>)

}
export default List
