# boilerplate-react-metamask
Boilerplate to connect React app to Web3 using Metamask.

# how to use?

* Wrap your App in **<MetamaskProvider>**
`import { MetamaskProvider } from "./metamask/context";`

* Get information about wallet connected to the browser
- Import **useMetamask** `import { useMetamask, ConnectMetamask } from "./metamask";
- `const { user } = useMetamask();`
- `if (!user.isConnected) return <ConnectMetamask />`