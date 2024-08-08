import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import { useParams } from "react-router-dom";
import commentsAPI from "../../api/comments-api";
//import { getAllComments } from "../../api/comments-api";
import { useGetOneGames } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import  {useCreateComment, useGetAllComments } from "../../hooks/useComments";
const initialValues = {
  comment: "",
};
export default function GameDetails() {
  const { gameId } = useParams();
  const [comments,setComments] = useGetAllComments(gameId);

    const createComment = useCreateComment();
  const {isAuthenticated} = useAuthContext()

  const [game, setGame] = useGetOneGames(gameId);

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
   async ({ comment }) => {
    try{
    const newComment =  await createComment(gameId, comment);
    setComments(oldComments => [ ...oldComments,newComment])

    }
    catch(err){
      console.log(err.message);
      
    }
    }
  );

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
          {comments.map(comment=>(
            <li key={comment._id} className="comment">
              <p>username : {comment.text}</p>
            </li>
          ))
          } 
          </ul>
          {comments.length === 0 &&  <p className="no-comment">No comments.</p>} 
        </div>

        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

     { isAuthenticated && 
      ( <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={submitHandler}>
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={changeHandler}
            value={values.comment}
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
      )}
    </section>
  );
}
