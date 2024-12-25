'use client'
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import RichTextEditor from "./tipTap/TiptapEditor";
function AddArticle({ editor }) {
    
    const router = useRouter();

    // State for form inputs
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [categoryID, setCategoryID] = useState("");
    const [img, setImage] = useState('');
    const [editorContent, setEditorContent] = useState("");
    const [categories, setCategories] = useState([])
    const handleEditorSave = (content) => {

        setEditorContent(content);
        swal({
            title: "Description successfully saved",
            icon: "success",
            buttons: "Ok",
        })
    };


    const addArticle = async (e) => {
        e.preventDefault();
        if (!title || !excerpt || !editorContent || !categoryID || !img) {
            swal("All fields are required", "", "warning");
            return;
        }

        const formData = new FormData();

        formData.append("title", title);
        formData.append("excerpt", excerpt);
        formData.append("content", editorContent);
       
        formData.append("categoryID", categoryID);
        formData.append("img", img);

        const res = await fetch("/api/blogs", {
            method: "POST",
            body: formData, // Send as FormData
        });

        if (res.status === 201) {
            swal({
                title: "Your blog have been posted successfully",
                icon: "success",
                buttons: "Got it",
            }).then(() => location.reload());
        } else {
            swal({
                title: "Error Post article",
                icon: "error",
            });
        }
    };



    const resetForm = () => {
        title("");
        excerpt([]);
        content("");
        img(null);
        editorContent('')

    };


    // Fetch subcategories based on selected category
    useEffect(() => {
        const getCategory = async () => {

            const res = await fetch(`/api/categories/`);
            if (res.status === 200) {
                const data = await res.json();
                setCategories(data.data);
            }

        };
        getCategory();
    }, []);

    // get materials

    return (
        <section className={styles.discount}>
            <p>ADD YOUR ARTWORK</p>

            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="title..."
                        type="text"
                        className={styles.input}

                    />

                </div>
                <div className="col-12 col-md-6 mb-3">

                    <label>Excerpt</label>
                    <input
                        value={excerpt}
                        onChange={(event) => setExcerpt(event.target.value)}
                        placeholder="excerpt..."
                        type="text"
                        className={styles.input}
                    />
                </div>



            </div>


            {/* Framed */}



            <div className="row">
                <div className="col-md-6 mb-3">

                    <label>Select Category:</label>
                    <select onChange={(event) => setCategoryID(event.target.value)} className="form-select">
                        <option value={-1}>Please select a Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>




                </div>

            </div>



            {/* tiptap editor */}

            <div className="mb-3">
                <div className={styles.editorContainer}>

                    <RichTextEditor onSave={handleEditorSave} />

                </div>

                {/* {errors.editorContent && <span className={`text-danger {editorContent.error}`}>{errors.editorContent}</span>} */}

            </div>

            <div className="mb-3">
                <label>Upload Your Images</label>
                <input
                    className={styles.fileInput}
                    onChange={(event) => setImage(event.target.files[0])}
                    type="file"
                />

            </div>


            <button className={`btn btn-primary w-100 ${styles.addButton}`} onClick={addArticle}>
                Submit Art Work
            </button>
        </section>
    );
}

export default AddArticle;
