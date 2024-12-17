'use client'
import React, { useState } from "react";
import styles from './dataTable.module.css';
import Modal from "@/components/modules/modal/Modal";

export default function DataTable({ title, customerOrder }) {
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => setShowModal(false);

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>


        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: '30px' }}>ID</th>
              <th>User(FullName)</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          {customerOrder.map((order,index) => (
            <>
              <tbody key={order._id}>
                <tr>
                  <td>{index+1}</td>
                  <td>{order.user_id.name}</td>
                  <td className={styles.row}>Crypto</td>
                  <td><button className={order.status=='pending'?styles.success:styles.completed}>{order.status}</button></td>
                  <td>{order.mobile_number}</td>
                  <td>{order.email}</td>
                  <td>{new Date(order?.order_date).toLocaleDateString('en-en')}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className={styles.btn}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              {showModal && (
                <Modal title="Order Details" hideModal={hideModal}>
                  <p className={styles.modal_title}>Order #2232 was placed on 2024/12/21 and is currently marked as completed.</p>
                  <div className={styles.groups}>
                    <div className={styles.group}>
                      <table>
                        <thead>
                          <tr>
                            <td>ArtworkName</td>
                            <td>Price</td>
                            <td>Shipping Ersal</td>
                            <td>Total</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{order.artwork_id.name}</td>
                            <td>{order.artwork_id.price}</td>
                            <td>120$</td>
                            <td>{(order.artwork_id.price) * 2}</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>





                  </div>
                  <div className="row mt-2">
                    <div className="col-md-5">
                      <img src={order.artwork_id.images[0]} alt="" width={200} height={150} />

                    </div>
                    <div className="col-md-7">
                      <p>{order?.order_notes}</p>
                    </div>


                  </div>
                  <hr />
                  <div className={styles.modal_bill}>
                    <p>Billing Address:</p>
                    <table>
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Phone</td>
                          <td>Email</td>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AsadShahi</td>
                          <td>0797277737</td>
                          <td>asadsahi804@gmail.com</td>

                        </tr>
                      </tbody>
                    </table>

                    <hr />
                    <table>
                      <thead>
                        <tr>
                          <td>Country</td>
                          <td>City</td>
                          <td>street</td>
                          <td>postalCode</td>


                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{order.country}</td>
                          <td>{order.city}</td>
                          <td>{order.street_address}</td>
                          <td>{order.postal_code}</td>

                        </tr>
                      </tbody>
                    </table>

                    <div>




                    </div>
                  </div>
                  <button className={styles.modal_btn}>Print Or shere</button>

                </Modal>
              )}

            </>
          ))}
        </table>




      </div>
    </div>
  );
}
