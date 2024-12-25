

import ClientLayout from '@/components/layouts/ClientLayout'
import modelOrder from '@/models/Order'
import DataTable from '@/components/modules/p-user/dataTable/DataTable'
// import Modal from '@/components/modules/modal/Modal'
// import styles from '@/styles/p-user/orders.module.css'
import { authUser } from '@/utils/AuthHelper'
import { redirect } from "next/navigation";
const Page = async () => {

  const user = await authUser()

  if (!user) {

    return redirect('/login-register')
  }

  const orders = await modelOrder.find({ user_id: user._id }).populate('user_id', 'name').populate('artwork_id', 'name price images').lean()


  return (
    <ClientLayout>
      <main>

        <DataTable title="Orders" customerOrder={JSON.parse(JSON.stringify(orders))} />
      </main>


    </ClientLayout>
  )
}

export default Page
