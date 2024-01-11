import { homepageReducer } from './reducers/homepageReducers';
import {
  userSignInReducer,
  initialState as userInitialState,
} from './reducers/userReducers';
import { artistDetailsReducer } from './reducers/artistReducers';
import { artistInformationFormReducer } from './reducers/artistInformationFormReducer';
import { marketplaceReducer } from './reducers/marketplaceReducer';
import {
  listingReducer,
  initialState as listingInitialState,
} from './reducers/listingReducers';
import { submitProposalReducer } from './reducers/proposalReducers';
import { submitListingReducer } from './reducers/submitListingReducers';
import { artistSearchReducer } from './reducers/artistSearchReducer';
import { submitContactUsReducer } from './reducers/contactReducer';
import { submitSubscriptionReducer } from './reducers/subscriptionReducer';
import { submitArtistInfoReducer } from './reducers/submitArtistInfoReducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Dispatch as ReduxDispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as ReduxThunk from 'redux-thunk';

const reducer = combineReducers({
  marketplace: marketplaceReducer,
  artistDetails: artistDetailsReducer,
  userSignIn: userSignInReducer,
});

const nonPersistReducers = combineReducers({
  submitArtistInfo: submitArtistInfoReducer,
  homepage: homepageReducer,
  listingDetails: listingReducer,
  submitProposal: submitProposalReducer,
  submitListing: submitListingReducer,
  submitContactUs: submitContactUsReducer,
  submitSubscription: submitSubscriptionReducer,
  artistInformationForm: artistInformationFormReducer,
  artistSearch: artistSearchReducer,
});

const persistConfig = {
  key: 'wxllspace-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const resettableReducer = (state: any, action: any) => {
  if (action.type === 'RESET_STATE') {
    state = undefined;
    localStorage.clear();
  }

  const newState = {
    ...nonPersistReducers(state, action),
    ...persistedReducer(state, action),
  };

  return newState;
};

export const store = createStore(resettableReducer, applyMiddleware(thunk));

export let persistor = persistStore(store);

type RootState = ReturnType<typeof reducer>;
// export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Define a new Dispatch type that handles thunks
type ThunkDispatch = ReduxThunk.ThunkDispatch<
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = ThunkDispatch | ReduxDispatch<Action<string>>;

// Then create a custom hook that wraps useDispatch and specifies the AppDispatch type
export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
