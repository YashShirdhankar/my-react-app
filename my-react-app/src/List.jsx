function List(){

  const fruits= [{id:1 ,name : "apple", cal:90},{ id:2,name :"orange", cal:40}, {id:3,name :"banana", cal:50}];

 //fruits.sort((a,b) => a.name.localeCompare(b.name));
  //fruits.sort((a,b) => b.name.localeCompare(a.name));
  fruits.sort((a,b)=> b.cal - a.cal);

  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
  <b>{fruit.cal}</b></li>);
  


  return(<>
  
  <ol className= "list-items">{listItems}</ol>);
  </>);
}
export default List