import "./styles.css";
import Button from "./components/Button";
import Input from "./components/Input";
import PlusIcon from "./assets/PlusIcon";
import SearchIcon from "./assets/SearchIcon";
import Select from "./components/Select";

export default function App() {
  return (
    <div className="App">
      <Button>Filled</Button>
      <br />
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button variant="filled" icon={<PlusIcon />}>
        Icon
      </Button>
      <br />
      <Button variant="text">Text</Button>
      <br />
      <Select />
      <br />
      <Input
        id="name"
        type="text"
        label="Input"
        width="300px"
        placeholder="Input..."
      />
      <br />
      <Input
        id="name"
        type="text"
        label="Icon right"
        iconPosition="right"
        icon={<SearchIcon />}
        width="300px"
        placeholder="Search"
      />
      <br />
      <Input
        id="name"
        type="text"
        label="Icon left"
        iconPosition="left"
        icon={<SearchIcon />}
        width="300px"
        placeholder="Search"
      />
      <br />
      <Input
        width="300px"
        id="name"
        type="number"
        label="Error"
        placeholder="Error"
        error="MEC Aging will start on submission date"
      />
    </div>
  );
}
