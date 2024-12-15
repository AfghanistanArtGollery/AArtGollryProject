"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

function SentTicket() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments([...data]);
    };

    getDepartments();
  }, []);

  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`);

      if (res.status === 200) {
        const data = await res.json();
        setSubDepartments([...data.data]);
      }
    };

    getSubDepartments();
  }, [departmentID]);

  const sendTicket = async () => {
    // Validation (You)

    const ticket = {
      title,
      body,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority,
    };

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      swal({
        title: "Your ticket has been successfully submitted",
        icon: "success",
        buttons: "View Tickets",
      }).then(() => {
        location.replace("/p-user/tickets");
      });
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>All Tickets</span>
        <Link href="/p-user/tickets">Create New Ticket</Link>
      </h1>

      <div className={styles.content}>
        <div className={styles.group}>
          <label>Select Department:</label>
          <select onChange={(event) => setDepartmentID(event.target.value)}>
            <option value={-1}>Please select a department</option>


            {departments.map((department) => (
              <option key={department._id} value={department._id}>
                {department.title}
              </option>
            ))}

          </select>
        </div>
        <div className={styles.group}>
          <label>Select Ticket Type:</label>
          <select onChange={(event) => setSubDepartmentID(event.target.value)}>
            <option value={-1}>Please select an option</option>

            {subDepartments.map((subDepartment) => (
              <option key={subDepartment._id} value={subDepartment._id}>
                {subDepartment.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>Enter Ticket Title:</label>
          <input
            placeholder="Title.."
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>Select Ticket Priority:</label>
          <select onChange={(event) => setPriority(event.target.value)}>
            <option value={-1}>Please select an option</option>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label dir="ltr">Enter Ticket Content:</label>
        <textarea
        dir="ltr"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={10}
        ></textarea>
      </div>
      <div className={styles.uploader}>
        <span>Max size: 6MB</span>
        <span>Allowed formats: jpg, png, jpeg, rar, zip</span>
        <input type="file" />
      </div>

      <button className={styles.btn} onClick={sendTicket}>
        <IoIosSend />
        Submit Ticket
      </button>
    </main>
  );
}

export default SentTicket;
