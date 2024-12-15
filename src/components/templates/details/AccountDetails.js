"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/accountDetails.module.css";
import swal from "sweetalert";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

function AccountDetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch("/api/auth/me");
            const data = await res.json();

            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
        };

        getUser();
    }, []);

    const updateUser = async () => {
        // Validation (You)

        const userNewInfos = {
            name,
            email,
            phone,
        };

        const res = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userNewInfos),
        });

        if (res.status === 200) {
            swal({
                title: "Your details have been updated successfully",
                icon: "success",
                buttons: "Got it",
            }).then(async (result) => {
                await fetch("/api/auth/signout", { method: "POST" });
                location.replace("/login-register");
            });
        }
    };

    return (
        <main>
            <div className={styles.details}>
                <h1 className={styles.title}>
                    <span>Account Details</span>
                </h1>
                <div className={styles.details_main}>
                    <section>
                        <div>
                            <label>Username</label>
                            <input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Please enter your username"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Please enter your email"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="Please enter your phone number"
                                type="number"
                            />
                        </div>
                    </section>
                    <section>
                        <div className={styles.uploader}>
                            <img src="/images/shahin.jpg" alt="Profile" />
                            <div>
                                <div>
                                    <button>
                                        <IoCloudUploadOutline />
                                        Change
                                    </button>
                                    <input type="file" name="" id="" />
                                </div>
                                <button>
                                    <MdOutlineDelete />
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <label>Password</label>
                            <div className={styles.password_group}>
                                <button>Change Password</button>
                                <input type="password" />
                            </div>
                        </div>
                    </section>
                </div>
                <button
                    type="submit"
                    onClick={updateUser}
                    className={styles.submit_btn}
                >
                    Submit Changes
                </button>
            </div>
        </main>
    );
}

export default AccountDetails;
