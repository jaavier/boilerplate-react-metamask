import { MetamaskProvider } from "./metamask/context";
import HelloMetamask from "./components/HelloMetamask";

export default function App() {
  return (
    <MetamaskProvider>
      <HelloMetamask />
    </MetamaskProvider>
  );
}
