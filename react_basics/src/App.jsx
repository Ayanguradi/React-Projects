import { Hello,Bye } from "./Components/Functions"
import { Calculator } from "./Components/Variables"
import Fruits from "./Components/Arrays"
import { Buttons } from "./Components/BootstrapElements"
import { AgeValidation } from "./Components/Condition"
import { Greeting } from "./Components/Greeting"
import { Container } from "./Components/Container"
import { FoodItems } from "./Components/ActionListener"
// ----------external style sheet----------
import "./App.css"
// --------Bootstrap-----------------
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return<>
  <h1 className="color">React first project</h1>
  <Container>
    <Greeting name="Ayan" msg="You are genius"></Greeting>
    <Hello ></Hello>
    <Bye></Bye>
    <Calculator></Calculator>
    <Fruits></Fruits>
    <Buttons></Buttons>
    <AgeValidation></AgeValidation>
  </Container>
  <Container>
    <FoodItems></FoodItems>
  </Container>
  </>
}
export default App