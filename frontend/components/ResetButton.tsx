import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return <input id="reset" type="button" value="Reset" onClick={onClick} />;
};

export default ResetButton;
