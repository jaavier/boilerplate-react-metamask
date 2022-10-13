import requestAccounts from "./requestAccounts";

const ConnectMetamask = () => {
  return (
    <div className="flex flex-col items-center">
      <div>Your Metamask is not connected to this website.</div>
      <div
        className="bg-orange-500 text-white px-2 py-3 rounded-md my-2 font-extralight w-1/2 text-center"
        onClick={() => {
          if (window.ethereum) {
            requestAccounts();
          }
        }}
      >
        Connect Metamask
      </div>
    </div>
  );
};

export default ConnectMetamask;
