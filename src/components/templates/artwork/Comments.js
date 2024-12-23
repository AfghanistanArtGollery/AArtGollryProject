import Comment from "@/components/modules/comment/Comment";
import styles from "./comments.module.css";
import CommentForm from "./CommentForm";

const Comments = ({ artWorkID, comments }) => {
  // parse it to json
  // const commentsData = JSON.parse(JSON.stringify(comments.comments));
  const commentsLegth = comments.length;

  return (
    <div>
      <p>Comments ({commentsLegth}) :</p>
      <hr />

      <main className={styles.comments}>
        <div className="row  d-flex  justify-content-between">
          <div className="col-12 col-md-6">
       
              <CommentForm artWorkID={artWorkID} />
            
          </div>
          <div className="col-12 col-md-6 ">

      
             <div className="container mt-3">
              <p className={styles.title}>
                All(){comments.artWorkID?.length === artWorkID} reviews for City Lights artwork (Canvas)
              </p>

              <div>
                {comments.map((comment) => (
                  comment.isAccept === true && (
                    <Comment key={comment._id} {...comment} />
                  )
                ))}
              </div>
             </div>


            
          </div>
        </div>







      </main>
    </div>
  );
};

export default Comments;
