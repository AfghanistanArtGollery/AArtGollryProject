'use client'
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/modules/tipTap/TiptapEditor";
function AddArtWork({ Categories,editor  }) {
  const router = useRouter();


  // State for form inputs
  const [name, setName] = useState("");


  const [subject, setSubject] = useState([]); // Subject will be selected by ID (Reference)
  const [subjectID, setSubjectID] = useState(''); // Subject will be selected by ID (Reference)
  const [materials, setMaterials] = useState([]); // Material will be selected by ID (Reference)
  const [materialID, setMaterialID] = useState(''); // Material will be selected by ID (Reference)
  const [style, setStyle] = useState([]); // Style will be selected by ID (Reference)
  const [styleID, setStyleID] = useState(''); // Style will be selected by ID (Reference)



  const [framed, setFramed] = useState(false);
  const [price, setPrice] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [shortDescription, setShortDescription] = useState("");
  // const [longDescription, setLongDescription] = useState("");

  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);

  // State for category and subcategory selection
  const [categoryID, setCategoryID] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryID, setSubCategoryID] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});


  // To store Tiptap editor content
  const [editorContent, setEditorContent] = useState("");
console.log('editorContent=>>>',editorContent)
  // Handle content save from the Tiptap editor

  const handleEditorSave = (content) => {

    setEditorContent(content);
    swal({
      title: "Description successfully saved",
      icon: "success",
      buttons: "Ok",
    })
  };
  
  // Function to handle form submission
  const addArt = async ({ editor }) => {
    // Reset errors before validating
    setErrors({});

    // Validation
    const validationErrors = {};

    // Check for required fields
    if (!name) validationErrors.name = "Artwork name is required.";
    if (!price) validationErrors.price = "Price is required.";
    if (!width || !height) validationErrors.dimensions = "Both width and height are required.";
    if (!categoryID) validationErrors.category = "Category is required.";
    if (!tags) validationErrors.tags = "Tags are required.";
    if (images.length === 0) validationErrors.images = "At least one image is required.";
    if (!subject) validationErrors.subject = "Subject is required.";
    if (!materials) validationErrors.materials = "Material is required.";
    if (!style) validationErrors.style = "Style is required.";
    if (!editorContent) validationErrors.editorContent = "Please click on save content button and try again";

    // If there are validation errors, stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("name", name);

    formData.append('framed', framed);
    formData.append("price", price);
    formData.append("dimensions[width]", width);
    formData.append("dimensions[height]", height);
    formData.append("shortDescription", shortDescription);

    formData.append("longDescription", editorContent); // Save the Tiptap content
    formData.append("categoryID", categoryID);
    formData.append('subjectID', subjectID); // Reference to subject
    formData.append('materialID', materialID); // Reference to material
    formData.append('styleID', styleID); // Reference to style
    // Only append subCategoryID if it exists
    if (subCategoryID) {
      formData.append("subCategoryID", subCategoryID);
    }

    formData.append("tags", tags.split(","));

    // Append images
    Array.from(images).forEach((image) => formData.append("images", image));

    try {
      const res = await fetch("/api/artworks", {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        swal({
          title: "Artwork added successfully",
          icon: "success",
          buttons: "Ok",
        }).then(() => {
          resetForm();
          router.refresh(); // Refresh the page after successful submission
        });
      } else {
        swal({
          title: "Error adding artwork",
          text: await res.text(),
          icon: "error",
          buttons: "Try Again",
        });
      }
    } catch (err) {
      swal({
        title: "Error",
        text: err.message,
        icon: "error",
        buttons: "Try Again",
      });
    }
  };
  const resetForm = () => {
    setName("");
    setSubject([]);
    setSubjectID("");
    setMaterials([]);
    setMaterialID("");
    setStyle([]);
    setStyleID("");
    setFramed(false);
    setPrice("");
    setWidth("");
    setHeight("");
    setShortDescription("");
    setTags("");
    setImages([]);
    setCategoryID("");
    setSubCategories([]);
    setSubCategoryID("");
  };


  // Fetch subcategories based on selected category
  useEffect(() => {
    const getSubCategory = async () => {
      if (categoryID) {
        const res = await fetch(`/api/categories/subcategory/${categoryID}`);
        if (res.status === 200) {
          const data = await res.json();
          setSubCategories(data.data);
        }
      }
    };
    getSubCategory();
  }, [categoryID]);

  // get materials

  useEffect(() => {
    const getMaterials = async () => {

      const res = await fetch(`/api/materials`);
      if (res.status === 200) {
        const data = await res.json();

        setMaterials([...data]);
      }

    };
    getMaterials();
  }, []);

  // get styles when componenet rendered
  useEffect(() => {
    const getStyles = async () => {

      const res = await fetch(`/api/styles`);
      if (res.status === 200) {
        const data = await res.json();

        setStyle([...data]);
      }

    };
    getStyles();
  }, []);

  useEffect(() => {
    const getSubjets = async () => {

      const res = await fetch(`/api/subjects`);
      if (res.status === 200) {
        const data = await res.json();

        setSubject([...data]);
      }

    };
    getSubjets();
  }, []);

  return (
    <section className={styles.discount}>
      <div>
        <h1 className={styles.title}>
          <span>Add ArtWork</span>
        </h1>
      </div>


      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label >Artwork Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Add your name..."
            type="text"
            className={styles.input}

          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label>Select Subject:</label>
          <select
            className="form-control"
            onChange={(event) => setSubjectID(event.target.value)}

          >
            <option value={-1}>Please select a Subject</option>
            {subject.map((subject) => (
              <option key={subject._id} value={subject._id}>
                {subject.title}
              </option>
            ))}
          </select>
          {errors.subject && <span className={styles.error}>{errors.subject}</span>}
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label>Select Material (Medium):</label>
          <select
            className="form-control"
            onChange={(event) => setMaterialID(event.target.value)}

          >
            <option value={-1}>Please select a Material</option>
            {materials.map((material) => (
              <option key={material._id} value={material._id}>
                {material.title}
              </option>
            ))}

          </select>
          {errors.materials && <span className={styles.error}>{errors.materials}</span>}
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label>Select Style:</label>
          <select
            onChange={(event) => setStyleID(event.target.value)}
            className="form-control"
          >
            <option value={-1}>Please select a Style</option>
            {style.map((style) => (
              <option key={style._id} value={style._id}>
                {style.title}
              </option>
            ))}
          </select>
          {errors.style && <span className={styles.error}>{errors.style}</span>}
        </div>
      </div>
      <div className="row">
        {/* Category */}
        <div className="col-12 col-md-6 mb-3">
          <label >Select Category:</label>
          <select onChange={(event) => setCategoryID(event.target.value)} className="form-select">
            <option value={-1}>Please select a Category</option>
            {Categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.category && <span className={styles.error}>{errors.category}</span>}
        </div>

        {/* SubCategory */}
        <div className="col-12 col-md-6 mb-3">
          <label>Select SubCategory (Optional):</label>
          <select onChange={(event) => setSubCategoryID(event.target.value)} className="form-select">
            <option value="">Please select a Subcategory (Optional)</option>
            {subCategories.map((subCat) => (
              <option key={subCat._id} value={subCat._id}>
                {subCat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Framed */}
      <div className="row">
        <div className="col-md-6 col-12">
          <label>Framed</label>
          <div className={styles.inputGroup}>
            <input id="framed" name="framed" type="checkbox"

              checked={framed}
              onChange={(event) => setFramed(event.target.checked)}
           className={styles.input}
            />
            <label className={styles.label} for="framed">is framed ArtWork?</label>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label>Price</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="e.g $399"
            type="number"
            className={styles.input}

          />
          {errors.price && <span className={styles.error}>{errors.price}</span>}
        </div>


      </div>



      <div className="row">

        <div className="col-12 col-md-6 mb-3">
          <label>Width Dimension</label>
          <input
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            placeholder="Width in cm"
            type="number"
            className={styles.input}

          />
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label>Height Dimension</label>
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="Height in cm"
           type="number"
            className={styles.input}

          />
        </div>
      </div>


      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Short Description</label>
          <input
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            placeholder="Short description less then 20 words"
            type="text"
            className={styles.input}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Tags Separate using (,)</label>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="art, nature, modern"
            type="text"
            className={styles.input}

          />
          {errors.tags && <span className={styles.error}>{errors.tags}</span>}
        </div>
      </div>



       {/* tiptap editor */}

      <div className="mb-3">
        <div className={styles.editorContainer}>
     
        <RichTextEditor  onSave={handleEditorSave} />

        </div>

          {errors.editorContent && <span className={`text-danger {editorContent.error}`}>{errors.editorContent}</span>}

      </div>

      <div className="mb-3">
        <label>Upload Your Images</label>
        <input
          className={styles.fileInput}
          onChange={(event) => setImages(event.target.files)}
          type="file"
          multiple

        />
        {errors.images && <span className={styles.error}>{errors.images}</span>}
      </div>


      <button className={`btn btn-primary w-100 ${styles.addButton}`} onClick={addArt}>
        Submit Art Work
      </button>
    </section>
  );
}

export default AddArtWork;
