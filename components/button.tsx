"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/lib/actions";

export const CreateButton = () => {
  return (
    <Link href="/contact/create" className="inline-flex items-center space-x-1 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-[9px] px-5 rounded">
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`contact/edit/${id}`} className="rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteContactWithId = deleteContact.bind(null, id);
  return (
    <form action={deleteContactWithId}>
      <button className="rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const classname = clsx("w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center", {
    "opacity-50 cursor-progress": pending,
  });
  return (
    <button type="submit" className={classname} disabled={pending}>
      {label === "Save" ? <span>{pending ? "Saving..." : "Save"}</span> : <span>{pending ? "Updating..." : "Update"}</span>}
    </button>
  );
};
