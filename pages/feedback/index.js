import React from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const feedbackPage = (props) => {
  return (
    <>
      <ul>
        {props.feedbackItems.map((item) => {
          <li key={item.id}>
            {item.text}
            <button>Show Details</button>
          </li>;
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
