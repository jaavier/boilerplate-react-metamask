import getBalance from "./getBalance";

export default async function requestAccounts(): Promise<User> {
	try {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		const address: string =
			accounts && window.ethereum.selectedAddress.toLocaleLowerCase();

    return {
			address,
			isConnected: address.length > 0,
			balance: await getBalance(window.ethereum.selectedAddress),
		};
	} catch (error) {
		console.log("Error connecting Metamask:", error);
		return {
			address: "",
			isConnected: false,
      balance: 0,
		};
	}
}
