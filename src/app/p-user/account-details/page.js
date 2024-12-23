import ClientLayout from "@/components/layouts/ClientLayout";
import Layout from "@/components/layouts/UserPanelLayout";
import AccountDetails from "@/components/templates/details/AccountDetails";

const page = () => {
  return (
    <ClientLayout>
      <AccountDetails />
    </ClientLayout>
  );
};

export default page;
