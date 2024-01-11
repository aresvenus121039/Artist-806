import React from 'react';
import SubmitProposalForm from './SubmitProposalForm';
import SubmitProposalSwipeable from './SubmitProposalSwipeable';

const SubmitProposalMobile: React.FC = () => {
  return (
    <SubmitProposalSwipeable>
      <SubmitProposalForm styleWrap={{}} />
    </SubmitProposalSwipeable>
  );
};

export default SubmitProposalMobile;
