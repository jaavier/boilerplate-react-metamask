# boilerplate-react-metamask
Boilerplate to connect React app to Web3 using Metamask.

# how to use?

* Wrap your App in **<MetamaskProvider>**
`import { MetamaskProvider } from "./metamask/context";`

* Get information about wallet connected to the browser
- Import **useMetamask** `import { useMetamask, ConnectMetamask } from "./metamask";`
- `const { user } = useMetamask();`
- `if (!user.isConnected) return <ConnectMetamask />`

# Connect a Smart Contract in simple steps
````import { useMetamask, ConnectMetamask, loadSmartContract } from "../metamask";
import dapp from "../metamask/dapp";

export default function HelloMetamask() {
  const { user, setContract } = useMetamask();
  const setSmartContract = () => {
    setContract(loadSmartContract(dapp.address, dapp.abi));
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
