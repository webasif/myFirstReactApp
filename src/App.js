import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p id="demo"></p>
      <script>
        class Car {
          constrctor(name){
          this.brand = name;
          }
        }
        myCar = new Car("Ford");
        document.write(myCar.brand);
        document.getElementById("demo").innerHTML = myCar.brand;

      </script>

    </div>
  );
}

export default App;
