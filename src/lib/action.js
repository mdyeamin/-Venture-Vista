import toast from "react-hot-toast";

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
    router.push("/destinations");
    router.refresh();
  }
  const data = await res.json();
  console.log(data, "response by me");
};

export const updateDestination = async (e,_id) => {
  
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

  console.log("after update", data);
};
