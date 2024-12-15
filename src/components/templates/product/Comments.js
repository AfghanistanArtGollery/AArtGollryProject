import Comment from "@/components/modules/comment/Comment";
import styles from "./comments.module.css";
import CommentForm from "./CommentForm";

const Comments = ({ productID, comments }) => {
  // parse it to json
  const commentsData = JSON.parse(JSON.stringify(comments.comments));

  return (
    <div>
      <p>Comments (7) :</p>
      <hr />

      <main className={styles.comments}>
        <div className={styles.user_comments}>
          <p className={styles.title}>
            7 reviews for SETPRESSO Coffee Capsule Compatible with Nespresso Machines (GOLD) - 10 Pack
          </p>
          <div>
            {commentsData.map((comment) => (
              comment.isAccept === true && (
                <Comment key={comment._id} {...comment} />
              )
            ))}
          </div>
        </div>
        <div className={styles.form_bg}>
          <CommentForm productID={productID} />
        </div>
      </main>
    </div>
  );
};

export default Comments;
