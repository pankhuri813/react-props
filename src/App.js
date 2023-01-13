
import './App.css';

function App(props) {
  return (
      <div className="lab">
          <h1>Kalvium Gallery </h1>
          <div className="image">
              {props.imageData.map((elt) => {
                  return <img src={elt.img} alt="elephant" key={elt.id} />;
              })}
          </div>
      </div>
  );
}

export default App;