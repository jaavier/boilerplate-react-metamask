import { useEffect } from "react";
import { useMetamask, ConnectMetamask, loadSmartContract } from "../metamask";
import dapp from "../metamask/dapp";

export default function HelloMetamask() {
  const { user, setContract } = useMetamask();
  const setSmartContract = () => {
    setContract(loadSmartContract(dapp.address, dapp.abi));
  };

  useEffect(() => {
    setSmartContract();
  }, []);

  return user.isConnected ? (
    <div>Wallet connected: {user.address}</div>
  ) : (
    <ConnectMetamask />
  );
}
