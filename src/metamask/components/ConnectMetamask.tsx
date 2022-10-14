import requestAccounts from "../helpers/requestAccounts";

const ConnectMetamask = () => {
  return (
    <div>
      <div className="my-2 tracking-wide">
        Your Metamask is not connected to this website
      </div>
      <div
        className="my-2 bg-orange-500 text-white px-5 py-3 rounded-md my-2 font-bold tracking-wider text-center hover:cursor-pointer uppercase"
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
