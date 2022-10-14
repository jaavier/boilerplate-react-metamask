import ConnectMetamask from "./components/ConnectMetamask";
import DetectMetamask from "./components/DetectMetamask";
import loadSmartContract from "./helpers/loadSmartContract";
import requestAccounts from "./helpers/requestAccounts";
import changeNetwork from "./helpers/changeNetwork";
import useMetamask from "./useMetamask";
import { MetamaskProvider } from "./context";

export {
  ConnectMetamask,
  DetectMetamask,
  MetamaskProvider,
  useMetamask,
  requestAccounts,
  changeNetwork,
  loadSmartContract
};
