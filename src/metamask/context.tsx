import React, { useEffect } from "react";
import requestAccounts from "./helpers/requestAccounts";

type Values = {
  user: User;
  setUser: (values: any) => void;
  contract: any;
  setContract: (values: any) => void;
};

const initialValues: Values = {
  contract: {},
  setContract: () => {},
  user: {
    address: "",
    isConnected: false
  },
  setUser: () => {}
};

const MetamaskContext = React.createContext<Values>(initialValues);

const MetamaskProvider = ({ children }: any) => {
  const [contract, setContract] = React.useState<any>();
  const [user, setUser] = React.useState<User>({
    address: "",
    isConnected: false
  });
  const getUserInfo = async () => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      const userInfo = await requestAccounts();
      setUser({
        ...user,
        ...userInfo
      });
    }
  };
  const values: Values = { user, setUser, contract, setContract };

  if (window.ethereum)
    window.ethereum.on("accountsChanged", async (accounts: any) => {
      getUserInfo();
    });

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <MetamaskContext.Provider value={values}>
      {children}
    </MetamaskContext.Provider>
  );
};

export { MetamaskProvider, MetamaskContext };
