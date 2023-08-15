import { Button, WrapperButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <>
      <WrapperButton>
        <Button onClick={() => onLeaveFeedback(good)}>Good</Button>
        <Button onClick={() => onLeaveFeedback(neutral)}>Neutral</Button>
        <Button onClick={() => onLeaveFeedback(bad)}>Bad</Button>
      </WrapperButton>
    </>
  );
};
