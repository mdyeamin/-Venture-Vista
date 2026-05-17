"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

import { FiTrash2 } from "react-icons/fi";
const DeleteBookingModal = ({ bookingId }) => {
  const handleDeleteBooking = async () => {
    const {data:token} = await authClient.token()
    console.log('token from cancel Booked',token);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token.token}`
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      redirect("/my-bookings");
    }
  };
  return (
    <AlertDialog>
      <Button
        variant=""
        className="flex items-center gap-2 border border-red-200 text-red-500 px-5 py-2 rounded-md hover:bg-red-50 transition text-sm font-medium"
      >
        <FiTrash2 size={16} /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                onClick={handleDeleteBooking}
                slot="close"
                variant="danger"
              >
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBookingModal;
