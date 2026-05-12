import toast from "react-hot-toast";

export const onSubmit = async (e,router) => {
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
      router.push("/destinations")
      router.refresh()
    }
    const data = await res.json();
    console.log(data, "response by me");
  };