import { redirect } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "./auth-client";

// submit destination operation
export const onSubmit = async (e, router) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const destination = Object.fromEntries(formData.entries());

  const { data: token } = await authClient.token();
  console.log(token, "token from action");

  const res = await fetch("http://localhost:8000/destinations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(destination),
  });
  if (res.ok) {
    toast.success(" added successfully!");
    redirect("/destinations");
    router.refresh();
  }
  const data = await res.json();
  console.log(data, "response by me");
};

// update operation

export const updateDestination = async (e, _id, router) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const updateData = Object.fromEntries(formData.entries());
const {data:token} = await authClient.token()
console.log("token from update destination", token);
  const res = await fetch(`http://localhost:8000/destinations/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token.token}`
    },
    body: JSON.stringify(updateData),
  });
  const data = await res.json();
  if (res.ok) {
    toast.success(" Updated successfully!");
    router.refresh();
    redirect("/destinations");
  }
  console.log("after update", data);
};

// delete operation

export const deleteDestination = async (_id) => {
  const { data: token } = await authClient.token();
  console.log("token from delete destination", token);

  const res = await fetch(`http://localhost:8000/destinations/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token.token}`,
    },
  });
  const data = await res.json();
  console.log(data);

  if (res.ok) {
    toast.success(" Delete successfully!");
    redirect("/destinations");
  }
};
