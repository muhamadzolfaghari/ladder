import getUser from "@/lib/utilities/getUser";
import getLadderByUserId from "@/lib/db/getLadderByUserId";

export default async function Test() {
    const user = await getUser();
    const row = await getLadderByUserId(user!.id!);

  return (
    <div>
     goal: {row?.goal}
    </div>  
  );
}
