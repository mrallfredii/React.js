import { MouseEvent } from "react";

function ListGroup() {

    let items = [
        'New York',
        'San Francisco',
        'Los Angeles',
        'Paris'
    ];

    //event handler
    const handleClick = (event: MouseEvent) => console.log(event)
 
  return (
    //fragment
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                    className="list-group-item" 
                    key={item} 
                    onClick={handleClick}
                    >
                        {item}
                </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
