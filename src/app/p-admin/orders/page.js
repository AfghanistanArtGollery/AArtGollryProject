
import DataTable from '@/components/templates/p-admin/orders/dataTable/DataTable'
import modelOrder from '@/models/Order'
import { authAdmin } from '@/utils/AuthHelper'
import { redirect } from 'next/navigation';
import AdminChildLayout from '@/components/layouts/AdminChildLayout';
const Page = async() => {

  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }
const orders= await modelOrder.find({}).populate('user_id','name').populate('artwork_id','name price images').lean()
  return (
    <AdminChildLayout>
      <main>

        <DataTable title="Orders" customerOrder={JSON.parse(JSON.stringify(orders))}/>     
     

      </main>


     
    </AdminChildLayout>
  )
}

export default Page
