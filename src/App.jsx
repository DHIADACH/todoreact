import "./App.css";
import Form from "./componants/Form";
import TaskWrap from "./componants/Taskwrap";
import Theme from "./componants/Theme";
import Flex from "./componants/Flex";

function App() {
  const [Tasks, setTasks]= useState([]); 
  return (
    <div className="center">
      <Theme/>
      <main>
      <Form setTasks={setTasks} Tasks={Tasks }/>
        <section id="tasks-management">
        <TaskWrap/>
           <hr />
      <Flex/>
        </section>
      </main>
    </div>
  );
}

export default App;