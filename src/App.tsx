import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );

  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  //   </div>
  // );
}

export default App;
