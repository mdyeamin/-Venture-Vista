import { headers } from "next/headers";
import { auth } from "./auth";

export const getDestinations = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  const date = await res.json();
  return date;
};

export const getSingleDestinationsById = async (id) => {
  const {token} = await auth.api.getToken({
    headers: await headers()
  });
  console.log(token);
  
  const res = await fetch(`http://localhost:8000/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data;
};
