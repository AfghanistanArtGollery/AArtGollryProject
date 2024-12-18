
import DataTable from '@/components/templates/p-admin/orders/dataTable/DataTable'
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import modelOrder from '@/models/Order'

const Page = async() => {
const orders= await modelOrder.find({}).populate('user_id','name').populate('artwork_id','name price images').lean()
console.log('orders=>',orders)
  return (
    <AdminPanelLayout>
      <main>

        <DataTable title="Orders" customerOrder={JSON.parse(JSON.stringify(orders))}/>     
     

      </main>


     
    </AdminPanelLayout>
  )
}

export default Page
