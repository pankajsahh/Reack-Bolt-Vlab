import Landing from './Components/Routes/Landing';
import ExerciseState from './Context/ExerciseState';
const App =()=>{
  return (

    <ExerciseState>
    <Landing/>  
    </ExerciseState>

  );
}
export default App;