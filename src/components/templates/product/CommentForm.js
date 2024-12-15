import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
import { useState } from "react";
import swalAlert from "@/utils/helperFunction";

const CommentForm = ({ productID }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);

  const setCommentScore = (score) => {
    setScore(score);
    swalAlert("Your rating has been successfully submitted", "success", "Continue submitting comment");
  };

  const submitComment = async () => {
    // Validation (You)
    const comment = {
      username,
      email,
      body,
      score,
      productID: productID,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    console.log("Response ->", res);
    if (res.status === 201) {
      swalAlert("Your comment has been successfully submitted", "success", "Got it");
    }
  };

  return (
    <div className={styles.form}>
      <p className={styles.title}>Write your review</p>
      <p>
        Your email address will not be published. Required fields are marked{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <div className={styles.rate}>
        <p>Your rating:</p>
        <div>
          <IoMdStar onClick={() => setCommentScore(5)} />
          <IoMdStar onClick={() => setCommentScore(4)} />
          <IoMdStar onClick={() => setCommentScore(3)} />
          <IoMdStar onClick={() => setCommentScore(2)} />
          <IoMdStar onClick={() => setCommentScore(1)} />
        </div>
      </div>
      <div className={styles.group}>
        <label htmlFor="">
          Your comment
          <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          id="comment"
          name="comment"
          cols="45"
          rows="8"
          required=""
          placeholder=""
        ></textarea>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="">
            Name
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="">
            Email
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" />
        <p>
          Save my name, email, and website in this browser for the next time I comment.
        </p>
      </div>
      <button onClick={submitComment}>Submit</button>
    </div>
  );
};

export default CommentForm;
