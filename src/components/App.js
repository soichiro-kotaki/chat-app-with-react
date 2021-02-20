import React, {useState} from 'react';
import SignIn from "./SignIn";
import Main from "./Main";

export default () => {
    const [name, setName] = useState("");

    if (name === '') {
        return <SignIn setName={setName} />;
    } else {
        return <Main name={name} />
    }
};
