'use client'

import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import swal from "sweetalert"; // Make sure you have the sweetalert library imported

export default function DataTable({ users, title }) {

   const router = useRouter();

    const changeRole = async (userID) => {
        const res = await fetch('/api/user/role', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: userID }),
        });
    }

    const removeUser = async (userID) => {
        swal({
            title: "Do you want to delete this user?",
            icon: "warning",
            buttons: ['No', 'Yes']
        }).then(async (result) => {
            if (result) {
                const res = await fetch('/api/user', {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: userID }),
                });
            }
        });
    }

    const banUser = async (email, phone) => {
        // Confirm user ban action
        
        swal({
            title: "Are you sure you want to ban this user?",
            icon: "warning",
            buttons: ["No", "Yes"],
        }).then(async (result) => {
            if (result) {
                const res = await fetch("/api/user/ban", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, phone }),
                });

                if (res.status === 200) {
                    swal({
                        title: "The user has been successfully banned.",
                        icon: "success",
                        buttons: "Got it",
                    }).then(() => {
                        router.refresh();
                    });
                }
            }
        });
    };

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
                            <th>Ban</th>
                            <th>Delete</th>
                            <th>Change Role</th>
                            <th>Edit</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Full Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                 <td>
                                    <button onClick={() => banUser(user.email, user.phone)} type="button" className={styles.delete_btn}>
                                        Ban
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => removeUser(user._id)} type="button" className={styles.delete_btn}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => changeRole(user._id)} type="button" className={styles.edit_btn}>
                                        Change Role
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className={styles.edit_btn}>
                                        Edit
                                    </button>
                                </td>
                                <td>{user.email ? user.email : "Email not found"}</td>
                                <td>{user.role === "USER" ? "Regular User" : "Admin"}</td>
                                <td>{user.name}</td>
                              
                              
                               
                                <td>{index + 1}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
