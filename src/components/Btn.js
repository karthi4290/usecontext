import React, { useContext } from "react";
import { AuthContext } from "../helpers/context";

const Btn = () => {
    const { handleSign, signedIn } = useContext(AuthContext);


    return (
        <>
            <button onClick={handleSign}>
                {signedIn ? 'Sign OUT' : 'Sign IN'}
            </button>

        </>
    );
};

export default Btn;
