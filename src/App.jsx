import ControlledForm from "./components/ControlledForm.jsx";
import UncontrolledForm from "./components/UncontrolledForm.jsx";
import EffectApi from "./components/EffectApi.jsx";

function App() {
  return (
    <div className="container mt-5">
      <ControlledForm />
      <UncontrolledForm />
      <EffectApi />
    </div>
  );
}

export default App;
