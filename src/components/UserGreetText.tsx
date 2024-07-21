"use client";
import React, { useState } from "react";

const UserGreetText = () => {
  const [user, setUser] = useState<any>(null);
  // const supabase = createClient();
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     setUser(user);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <>{user !== null && <p>{user.user_metadata.full_name ?? "user"}</p>}</>
  );
};

export default UserGreetText;
