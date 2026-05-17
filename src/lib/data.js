import { headers } from "next/headers";
import { auth } from "./auth";

export const getDestinations = async () => {
  const {token} = await auth.api.getToken({
    
    headers:await headers()
  })
  console.log("token from all destinations",token)
  const res = await fetch("http://localhost:8000/destinations", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const date = await res.json();
  return date;
};

export const getSingleDestinationsById = async (id) => {
  // token access from server component
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log("token from single destination (details)",token);

  const res = await fetch(`http://localhost:8000/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
