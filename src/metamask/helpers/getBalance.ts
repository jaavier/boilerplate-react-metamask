import { ethers } from "ethers";

export default function getBalance(address: string) {
	return window.ethereum
		.request({ method: "eth_getBalance", params: [address, "latest"] })
		.then((userBalance: number) => {
      return ethers.utils.formatEther(userBalance);
		})
		.catch((error: any) => {
			console.log(error.message);
      return 1337
		});
}