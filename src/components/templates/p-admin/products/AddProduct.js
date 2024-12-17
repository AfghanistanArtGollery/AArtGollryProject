'use client'
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Tiptap from "@/components/tipTap/TiptapEditor";

function AddProduct({ Categories }) {
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

  // Handle content save from the Tiptap editor
  const handleEditorSave = (content) => {
    console.log("Saved Editor Content:", content);
    setEditorContent(content); // Store editor content in state
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



  console.log('subject state=>', subject)


  return (
    <section className={styles.discount}>
      <p> ADD YOUR  ARTWORK</p>
      <div className={styles.discount_main}>
        {/* Artwork Name */}
        <div>
          <label>Artwork Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Add your name..."
            type="text"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        {/* Subject */}

        <div>
          <label>Select Maetrial (Medium):</label>

          <select onChange={(event) => setSubjectID(event.target.value)}>
            <option value={-1}>Please select a Subject</option>
            {subject.map((subject) => (
              <option key={subject._id} value={subject._id}>
                {subject.title}
              </option>
            ))}
          </select>
          {errors.category && <span className={styles.error}>{errors.category}</span>}
        </div>


        {/* Material */}


        <div>
          <label>Select Maetrial (Medium):</label>

          <select onChange={(event) => setMaterialID(event.target.value)}>
            <option value={-1}>Please select a Materila</option>
            {materials.map((material) => (
              <option key={material._id} value={material._id}>
                {material.title}
              </option>
            ))}
          </select>
          {errors.category && <span className={styles.error}>{errors.category}</span>}
        </div>




        {/* Style */}
        <div>
          <label>Select Style</label>

          <select onChange={(event) => setStyleID(event.target.value)}>
            <option value={-1}>Please select a style</option>
            {style.map((style) => (
              <option key={style._id} value={style._id}>
                {style.title}
              </option>
            ))}
          </select>
          {errors.category && <span className={styles.error}>{errors.category}</span>}
        </div>


        {/* Framed */}
        <div>
          <label className="form-check-label" htmlFor="framed">
            Yes, the artwork is framed
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="framed"
            checked={framed}
            onChange={(event) => setFramed(event.target.checked)}
          />
        </div>

        {/* Price */}
        <div>
          <label>Price</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Add artwork price"
            type="text"
          />
          {errors.price && <span className={styles.error}>{errors.price}</span>}
        </div>

        {/* Category */}
        <div>
          <label>Select Category:</label>
          <select onChange={(event) => setCategoryID(event.target.value)}>
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
        <div>
          <label>Select SubCategory (Optional):</label>
          <select onChange={(event) => setSubCategoryID(event.target.value)}>
            <option value="">Please select a Subcategory (Optional)</option>
            {subCategories.map((subCat) => (
              <option key={subCat._id} value={subCat._id}>
                {subCat.title}
              </option>
            ))}
          </select>
        </div>




        {/* Dimensions */}
        <div>
          <label>Width Dimension</label>
          <input
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            placeholder="Width"
            type="text"
          />
        </div>

        <div>
          <label>Height Dimension</label>
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="Height"
            type="text"
          />
        </div>

        {/* Descriptions */}
        <div>
          <label>Short Description</label>
          <input
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            placeholder="Short description"
            type="text"
          />
        </div>
        {/* Tags */}
        <div>
          <label>Tags</label>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="art, nature, modern"
            type="text"
          />
          {errors.tags && <span className={styles.error}>{errors.tags}</span>}
        </div>


        {/* rich text editor */}
        <div >
          <Tiptap onSave={handleEditorSave} />
        </div>

        {/* 
        <div>
          <label>Long Description</label>
          <textarea
            rows={7}
            value={longDescription}
            onChange={(event) => setLongDescription(event.target.value)}
            placeholder="Long description"
            type="text"
          />
        </div> */}
        {/* Images */}
        <div>
          <label>Upload Your Images</label>
          <input
            className={styles.fileInput}
            onChange={(event) => setImages(event.target.files)}
            type="file"
            multiple
          />
          {errors.images && <span className={styles.error}>{errors.images}</span>}
        </div>



      </div>

      {/* Submit Button */}
      <button className={styles.addButton} onClick={addArt}>
        Add Artwork
      </button>
    </section>
  );
}

export default AddProduct;
