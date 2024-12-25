import ClientLayout from "@/components/layouts/ClientLayout";
import Layout from "@/components/layouts/UserPanelLayout";
import AccountDetails from "@/components/templates/details/AccountDetails";
import { authUser } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";
const page = async() => {
  const user=await authUser()
  
  if(!user){
    
    return redirect('/login-register')
  }

  return (
    <ClientLayout>
      <AccountDetails />
    </ClientLayout>
  );
};

export default page;
