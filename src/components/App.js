import React, {useState} from 'react';
import SignIn from "./SignIn";
import Main from "./Main";
import config from "../config.json"

 const App = () => {
    const [name, setName] = useState("");

    if (name === '' && config.signInAbled) {
        return <SignIn setName={setName} />;
    } else {
        return <Main name={name} />
    };
};
export default App;
