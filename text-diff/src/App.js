import {useState} from "react";
import TextDiff from "./components/TextDiff"
import TextArea from "./components/TextArea";

function App() {

    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")

    return (
        <div className="container">
            <TextDiff
                first={first}
                second={second}
            ></TextDiff>
            <div className="cols">
                <div className="col">
                    <TextArea value={first} onChange={(text) => setFirst(text)}></TextArea>
                </div>
                <div className="col">
                    <TextArea value={second} onChange={(text) => setSecond(text)}></TextArea>
                </div>
            </div>

        </div>
    );
}

export default App;
