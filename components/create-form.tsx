"use client";
import { SaveContact } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";

const CreateForm = () => {
  const [state, formAction] = useFormState(SaveContact, null);
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-3">
            Full Name
          </label>
          <input type="text" name="name" id="name" placeholder="Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 text-sm mt-2">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-3">
            Phone Number
          </label>
          <input type="text" name="phone" id="phone" placeholder="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 text-sm mt-2">{state?.Error?.phone}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500 text-sm mt-2">{state?.message}</p>
        </div>

        <SubmitButton label="Save" />
      </form>
    </div>
  );
};

export default CreateForm;
