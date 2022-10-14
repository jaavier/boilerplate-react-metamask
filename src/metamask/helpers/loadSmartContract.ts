import { ethers } from "ethers";

function loadSmartContract(address: string, abi: Record<string, any>[]) {
  if (!window.ethereum) return null;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(address, abi, provider.getSigner());
  return contract;
}

export default loadSmartContract;
