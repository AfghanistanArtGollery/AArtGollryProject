"use client"
import DataTable from '@/components/modules/dataTable/DataTable'
import ClientLayout from '@/components/layouts/ClientLayout'
import tableStyles from '@/components/modules/dataTable/dataTable.module.css'
import { useState } from 'react'

import Modal from '@/components/modules/modal/Modal'
import styles from '@/styles/p-user/orders.module.css'

const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => setShowModal(false)
  return (
    <ClientLayout>
      <main>

        <DataTable title="Orders">

          <table className={tableStyles.table}>
            
            <thead>
              <tr>
                <th style={{width:'30px'}}>ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Artwork</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024/12/20</td>
                <td>Completed</td>
                <td className={tableStyles.row}>
                  Beautiful Landscape
                </td>
                <td>500$</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className={tableStyles.btn}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>2024/12/10</td>
                <td>Completed</td>
                <td className={tableStyles.row}>
                  {/* <img width={40} height={40} src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png" alt="Colombian Coffee" /> */}
                  Beautiful Landscape
                </td>
                <td>630$</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className={tableStyles.btn}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </DataTable>

      </main>


      {showModal && (
        <Modal title="Order Details" hideModal={hideModal}>
          <p className={styles.modal_title}>Order #2232 was placed on 2023/12/21 and is currently marked as completed.</p>
          <div className={styles.groups}>
            <div className={styles.group}>
              <p>Artwork</p>
              <p>Total</p>
            </div>
            <div className={styles.group}>
              <p>Beautiful Landscape</p>
              <p>360$</p>
            </div>
            <div className={styles.group}>
              <p>Shopping Cart Total:</p>
              <p>0 $</p>
            </div>
            <div className={styles.group}>
              <p>Final Price:</p>
              <p>630$</p>
            </div>
          </div>
          <button className={styles.modal_btn}>Reorder</button>
          <div className={styles.modal_bill}>
            <p>Billing Address:</p>
            <div>
              <p>AsadShahi</p>
              <p>0797277737</p>
              <p>asadshahi804@gmail.com</p>
            </div>
          </div>
        </Modal>
      )}
    </ClientLayout>
  )
}

export default Page
