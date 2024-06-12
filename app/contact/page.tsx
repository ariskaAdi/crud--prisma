import { CreateButton } from "@/components/button";
import ContactTable from "@/components/contact-table";
import Serach from "@/components/serach";

const Contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Serach />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default Contacts;
