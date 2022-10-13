# boilerplate-react-metamask
Boilerplate to connect React app to Web3 using Metamask.

# how to use?

* Wrap your App in **<MetamaskProvider>**
`import { MetamaskProvider } from "./metamask/context";`

* Get information about wallet connected to the browser
- Import **useMetamask** `import { useMetamask, ConnectMetamask } from "./metamask";`
- `const { user } = useMetamask();`
- `if (!user.isConnected) return <ConnectMetamask />`

# Connect a Smart Contract in simple steps

- `import dapp from "../metamask/dapp";`
- `import { useMetamask, loadSmartContract } from "./metamask";`
- `const { user, setContract } = useMetamask();`
- `const smartContract = loadSmartContract(dapp.address, dapp.abi); // <- returns a contract handler`
- `setContract(smartContract);`
- 🚀🚀
