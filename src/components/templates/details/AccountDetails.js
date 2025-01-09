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
    const [avatar, setAvatar] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch("/api/auth/me");
            const data = await res.json();

            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setImagePreview(data.avatar || "/images/shahin.jpg");
        };

        getUser();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setImagePreview(URL.createObjectURL(file)); // Show preview
        }
    };

    const updateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        if (avatar) formData.append("avatar", avatar);

        const res = await fetch("/api/user", {
            method: "POST",
            body: formData, // Send as FormData
        });

        if (res.status === 200) {
            swal({
                title: "Your details have been updated successfully",
                icon: "success",
                buttons: "Got it",
            }).then(() => location.reload());
        } else {
            swal({
                title: "Error updating your details",
                icon: "error",
            });
        }
    };


    const handlePasswordChange = async (e) => {
        e.preventDefault();

        try {
            // Send the current and new password to the backend API
            const res = await fetch('/api/user/password', {

                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword

                })
            });
            if (res.status == 200) {
                swal({

                    title: 'your password successfully changed',
                    icon: 'success',
                    button: 'Ok',

                })
            } else if (res.status == 401) {
                swal({

                    title: 'your currnd password is not valid',
                    icon: 'warning',
                    button: 'ok',

                })
            } else if (res.status == 404) {
                swal({

                    title: 'Your password should includes at least 8 character number *  !!',
                    icon: 'warning',
                    button: 'ok',

                })
            } else {
                swal({

                    title: 'Your password not changed !!',
                    icon: 'warning',
                    button: 'ok',

                })
            }

        } catch (err) {
            console.log(err)
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
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Please enter your username"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter your email"
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Please enter your phone number"
                                type="number"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={updateUser}
                            className={styles.submit_btn}
                        >
                            Submit Changes
                        </button>
                    </section>
                    <section>
                        <div className={styles.uploader}>
                            <img src={imagePreview} alt="Profile" />
                            <div>
                                <div>
                                    <label htmlFor="file-upload" className={styles.upload_btn}>
                                        <IoCloudUploadOutline /> Change ProFile
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        setAvatar(null);
                                        setImagePreview("/images/shahin.jpg");
                                    }}
                                >
                                    <MdOutlineDelete /> Delete
                                </button>
                            </div>
                        </div>


                        <form onSubmit={handlePasswordChange}>
                            <div>
                                <label>Current Password</label>
                                <input

                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label>New Password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                />
                            </div>
                            <div type="submit" className={styles.password_group}>
                                <button>Change Password</button>
                            </div>
                        </form>



                    </section>
                </div>

            </div>
        </main>
    );
}

export default AccountDetails;
