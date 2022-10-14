import { useEffect, useState } from "react";
import { useMetamask } from "../metamask";

export default function Welcome() {
  const { user, contract } = useMetamask();
  const [owner, setOwner] = useState<string>("");
  const getOwner = async () => {
    try {
      const response = await contract.owner();
      setOwner(response);
    } catch (e) {
      console.log("Error getting owner:", e);
    }
  };

  useEffect(() => {
    getOwner();
  }, []);

  const role =
    owner.toLocaleLowerCase() === user.address.toLocaleLowerCase()
      ? "owner"
      : "user";

  return (
    <>
      <div className="my-1 uppercase tracking-wide">{role} connected:</div>
      <div className="my-1 tracking-widest font-extrabold">{user.address}</div>
    </>
  );
}
