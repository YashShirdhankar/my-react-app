import Card from "./Card";
import Button from "./Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Counter from "./Counter";
function App() {

  return(
   <>
    <Card></Card>
    <Card/>
    <Button/>
    <Students name="YASH SHIRDHANKAR"    age={22}isstudent= {true}/>
    <Students name="monty" age={27} isstudent= {false}/>
    <Students/>
    <UserGreeting isLoggedIn={true} username="Yash"/>
    <List/>
    <Counter/>
    </>
    
   );
  
}

export default App
