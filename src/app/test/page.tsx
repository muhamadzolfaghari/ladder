import ShowCounter from "@/components/Test/ShowCounter";
import axios from "axios";
import getUser from "@/lib/utilities/getUser";

export default async function Test() {
    const user = await getUser();



  return (
    <div>
      <span>sdfdsfs</span>
      <button>fsdfsf</button>
      <input type="text" />
      <ShowCounter />
    </div>
  );
}
