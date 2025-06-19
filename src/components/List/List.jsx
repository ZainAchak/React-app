import style from './List.module.css';


function List(props) {
    const items = props.items;
    const category = props.category;
    //const fruits = ["Apple","Banana","Orange","Cocunut","Pineapple"];
    // const fruits = [{id:1,name:"Apple", calories:95},
    //                 {id:2,name:"Banana", calories:105},
    //                 {id:3,name:"Orange", calories:45},
    //                 {id:4,name:"Cocunut", calories:159},
    //                 {id:5,name:"Pineapple", calories:37}];

    // fruits.sort((a,b) => (a.name.localeCompare(b.name)));

    //const lowcalFruits = props.fruits.filter(fruit => fruit.calories > 100);
    if(items){ 
        const listItems = items.map(fruit =>(
            <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b></li>
        ));
        return(
            <>
                <h2 className={style.myH2}>{category}</h2>
                <ol>{listItems}</ol>
            </>
        )
    }
}

export default List