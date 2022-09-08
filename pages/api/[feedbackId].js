import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler() {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  resizeBy.status(200).json({ feedback: selectedFeedback });
}

export default handler;
