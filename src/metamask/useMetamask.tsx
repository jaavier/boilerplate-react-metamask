import React from "react";
import { MetamaskContext } from "./context";

const useMetamask = () => React.useContext(MetamaskContext);

export default useMetamask;
