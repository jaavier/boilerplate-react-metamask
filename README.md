# Boilerplate-react-metamask
Boilerplate to connect React app to Web3 using Metamask.

# How to use?
Wrap your **App** in `<MetamaskProvider></MetamaskProvider>`

**App.jsx**
```
import { MetamaskProvider } from ". /metamask";
import HelloMetamask from "./components/HelloMetamask";

export default function App() {
  return (
    <MetamaskProvider>
      <HelloMetamask />
    </MetamaskProvider>
  );
}
```

# Connecting to Metamask
Use the component `<ConnectMetamask />` to request access to use Metamask

```
import React from "react";
import { useMetamask, ConnectMetamask } from "../metamask";

export default function MyWallet(props: any) {
  const { user } = useMetamask();
  
  if (!user.isConnected) return <ConnectMetamask />
  
  return <div>My wallet is: {user.address}</div>;
}
```

# Connect a React Component to a Smart Contract in simple steps 🚀
* `loadSmartContract(address, abi)` to get a handler for your Smart Contract
* `contract` is the object with methods and variables from your Smart Contract

```
import { useMetamask, ConnectMetamask, loadSmartContract } from "../metamask";
import dapp from "../metamask/dapp";

export default function HelloMetamask() {
  const { user, contract, setContract } = useMetamask();
  const setSmartContract = () => {
    const smartContract = loadSmartContract(dapp.address, dapp.abi);
    setContract(smartContract);
  };

  useEffect(() => {
    setSmartContract();
  }, []);
  
  return <div>My first dapp!</div>
}
```
You are ready! 🚀🚀

# Ask for permissions to connect
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/990085/195737168-747e7f87-b20c-49c7-b68a-346117eba184.png">

# After connection
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/990085/195737336-3688d32f-2059-4187-8f17-ecfb1269ee71.png">
