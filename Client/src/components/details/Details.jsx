import { useNavigate, useParams, Link } from "react-router";
import { useCurrentGame, useDeleteGame } from "../../api/gameapi";
import { useComments, useCreateComment, useEditComment, useDeleteComment } from "../../api/comentapi";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";

export default function Details() {
  const { email, userId } = useAuth();
  const { gameId } = useParams();
  const { game } = useCurrentGame(gameId);
  const { comments: initialComments, error } = useComments(gameId);
  const { createComment } = useCreateComment();
  const { editComment } = useEditComment();
  const { deleteComment } = useDeleteComment();
  const { deleteGame } = useDeleteGame();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (initialComments) {
      setComments(initialComments);
    }
  }, [initialComments]);

  const delHandler = async () => {
    await deleteGame(gameId);
    navigate("/catalog");
  };

  const addCommentHandler = async (e) => {
    e.preventDefault();

    try {
      const newComment = await createComment({
        gameId,
        text: commentText,
        author: email,
      });
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const deleteCommentHandler = async (commentId) => {
    try {
      await deleteComment(commentId);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const editCommentHandler = async (commentId) => {
    try {
      const updatedComment = await editComment(commentId, {
        text: editText,
        author: email,
      });
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === commentId ? updatedComment : comment
        )
      );
      setEditMode(null);
      setEditText("");
    } catch (err) {
      console.error("Error editing comment:", err);
    }
  };
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <h1>{game.title}</h1>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          {error && <p>Error loading comments: {error.message}</p>}
          <ul>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <li key={comment._id} className="comment">
                  {editMode === comment._id ? (
                    <>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button  className="buttons" onClick={() => editCommentHandler(comment._id)}>
                        Save
                      </button>
                      <button  className="buttons" onClick={() => setEditMode(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <p>Content: {comment.text}</p>
                      <p>Author: {comment.author}</p>
                      {comment.author === email && (
                        <>
                          <button className="buttons"
                            onClick={() => {
                              setEditMode(comment._id);
                              setEditText(comment.text);
                            }}
                          >
                            Edit
                          </button>
                          <button className="buttons"
                            onClick={() => deleteCommentHandler(comment._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </>
                  )}
                </li>
              ))
            ) : (
              <p className="no-comment">No comments.</p>
            )}
          </ul>
        </div>

        {game._ownerId === userId && (
          <div className="buttons">
            <Link to={`/edit/${gameId}`} className="button">
              Edit
            </Link>
            <button className="button" onClick={delHandler}>
              Delete
            </button>
          </div>
        )}
      </div>

      {userId && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={addCommentHandler}>
            <textarea
              name="comment"
              placeholder="Comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
}
