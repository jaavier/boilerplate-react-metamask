export default async function requestAccounts() {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    const address: string = accounts && accounts[0].toLocaleLowerCase();

    return {
      address,
      isConnected: address.length > 0
    };
  } catch (error) {
    console.log("Error connecting Metamask:", error);
    return {};
  }
}
