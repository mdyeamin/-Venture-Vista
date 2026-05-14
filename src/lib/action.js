import { redirect } from "next/navigation";
import toast from "react-hot-toast";
// submit operation
export const onSubmit = async (e, router) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const destination = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:8000/destinations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
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

  const res = await fetch(`http://localhost:8000/destinations/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
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
  const res = await fetch(`http://localhost:8000/destinations/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);

  if (res.ok) {
    toast.success(" Delete successfully!");
    redirect("/destinations");
  }
};
