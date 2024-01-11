import {
  SUBMIT_PROPOSAL_REQUEST,
  SUBMIT_PROPOSAL_SUCCESS,
  SUBMIT_PROPOSAL_ERROR,
} from '@/constants/proposalConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const initialState = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const submitProposalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PROPOSAL_REQUEST:
      return { status: REQUEST_STATUS.LOADING };
    case SUBMIT_PROPOSAL_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case SUBMIT_PROPOSAL_ERROR:
      return { status: REQUEST_STATUS.FAILED, error: action.payload };
    default:
      return state;
  }
};

export const selectProposalDetails = (state) => {
  return state.submitProposal;
};

export const requestStatus = (state) => {
  return state.submitProposal.status;
};
