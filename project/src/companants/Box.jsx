import React, { useContext, useState,useEffect } from "react";
import { UserContext } from "./Feach";
import axios from "axios";
import "./Box.css";

function Box() {
  const { user } = useContext(UserContext);
  const [votes, setVotes] = useState({});

  async function updateData(userId, rating) {
    try {
      const response = await axios.put(
        `https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore/product/${userId}`,
        { rating }
      );
      // Optionally, you can refetch the data after an update
      console.log("Data updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }
  const handleVote = (userId,vote) => {
    // Create a copy of the current votes state
    const newVotes = { ...votes };

    // Increment the vote count for the specified user
    newVotes[userId] = (newVotes[userId] ) + 1;
        
    // Update the state with the new votes object
    setVotes(newVotes);
          vote=vote+1;

    // Update the data in the mock API
    updateData(userId,vote);

  };




  return (
    <section className="gallary">
      <section className="content">
        {user &&
          user.map((userData) => (
            <section key={userData.id} className="box">
              <img src={userData.image} alt="" />
              <h4>{userData.name}</h4>
              <h5>$15.6</h5>
              <button className="voting" onClick={() => handleVote(userData.id,userData.rating)}>
                Vote
              </button>
              <section className="cart">
                <h4>
                  <i className='bx bxs-cart'>{userData.rating}</i>
                </h4>
              </section>
            </section>
          ))}
      </section>
    </section>
  );
}

export default Box;
