import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const feedbackPage = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  console.log(feedbackItems);

  return (
    <>
      <h1>feedback</h1>
      {feedbackData && <p>{feedbackData.email}</p>}

      <ul>
        {feedbackItems?.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={loadFeedbackHandler.bind(null, item.id)}>
                Show Details
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default feedbackPage;
