import { ConnectMetamask } from "../";

export default function DetectMetamask() {
  if (!window.ethereum) {
    return (
      <span className="tracking-wide">
        Metamask is not installed in this browser
      </span>
    );
  } else {
    return <ConnectMetamask />;
  }
}
