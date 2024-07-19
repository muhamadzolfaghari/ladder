"use client";
import React, { useEffect, useState } from "react";

const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("/api/auth/user");
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data.userInfo);
        } else {
          console.error("Failed to fetch user info");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    return <div>No user information available</div>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

export default UserProfile;
