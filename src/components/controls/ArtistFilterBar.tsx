import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import { useInput } from '@mui/core/';
import InputSelectArtist from './InputSelectArtist';
import { useDispatch, useSelector } from 'react-redux';
import {
  ARTIST_GET_SEARCH_SUCCESS,
  ARTIST_GET_SKIP,
} from '../../constants/artistSearchConstants';
import zipcodes from 'zipcodes';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles';

const SearchArtistInput = React.forwardRef(function CustomInput(
  props: any,
  ref: any
) {
  const { getRootProps, getInputProps } = useInput(props, ref);
  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Box {...rootProps}>
      <StyledSearchInput {...props} {...inputProps} />
    </Box>
  );
});

export const ArtistFilterBar = () => {
  const dispatch = useDispatch();
  const styles = useFormLabelStyles();
  const artistSearchResult = useSelector((state: any) => state.artistSearch);

  const filterHandler = async () => {
    const { name, style, state } = artistSearchResult?.results;

    const query: Record<string, string | number> = {};
    if (name) query['name'] = name;
    if (style) query['style'] = style;
    if (state) query['state'] = state;
    query['skip'] = 0;
    const queryUrl = new URLSearchParams(
      query as Record<string, string>
    ).toString();

    dispatch({
      type: ARTIST_GET_SEARCH_SUCCESS,
      payload: {
        ...artistSearchResult?.results,
        skip: 0,
        loading: true,
        error: false,
        initialLoad: true,
      },
    });
    const { data } = await axios.get(
      `/api/artistsearch${queryUrl ? `?${queryUrl}` : ''}`
    );
    // On error
    if (!data?.artist) {
      dispatch({
        type: ARTIST_GET_SEARCH_SUCCESS,
        payload: {
          ...artistSearchResult?.results,
          skip: 0,
          loading: false,
          error: true,
          initialLoad: true,
        },
      });
      return;
    }
    // On success
    dispatch({
      type: ARTIST_GET_SEARCH_SUCCESS,
      payload: {
        ...artistSearchResult?.results,
        artist: data?.artist,
        loading: false,
        initialLoad: true,
        skip: ARTIST_GET_SKIP,
        total: data.total,
      },
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item xs={12} sm={3} xl={6}>
          <SearchArtistInput
            disabled={false}
            aria-label="artist name"
            placeholder="Search by artist name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: ARTIST_GET_SEARCH_SUCCESS,
                payload: {
                  ...artistSearchResult?.results,
                  name: e?.target.value || '',
                },
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={2}>
          <InputSelectArtist
            placeholder="All Art Style"
            getSelectValue={(value: string) =>
              dispatch({
                type: ARTIST_GET_SEARCH_SUCCESS,
                payload: {
                  ...artistSearchResult?.results,
                  style: value || '',
                },
              })
            }
            list={[
              '3D',
              'Abstract',
              'Anamorphic',
              'Calligraphy',
              'Cartoon',
              'Contemporary',
              'Cubism',
              'Fantasy',
              'Figurative',
              'Geometric',
              'Graffiti',
              'Impressionist',
              'Landscape',
              'Lettering',
              'Modern',
              'Optical Illusion',
              'Pop Art',
              'Portrait',
              'Realism',
              'Surrealism',
              'Typography',
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={2}>
          <InputSelectArtist
            placeholder="All State"
            getSelectValue={(value: string) =>
              dispatch({
                type: ARTIST_GET_SEARCH_SUCCESS,
                payload: {
                  ...artistSearchResult?.results,
                  state: zipcodes.states.normalize(value) || '',
                },
              })
            }
            list={[
              'Alabama',
              'Alaska',
              'Arizona',
              'Arkansas',
              'California',
              'Colorado',
              'Connecticut',
              'Delaware',
              'Florida',
              'Georgia',
              'Hawaii',
              'Idaho',
              'Illinois',
              'Indiana',
              'Iowa',
              'Kansas',
              'Kentucky',
              'Louisiana',
              'Maine',
              'Maryland',
              'Massachusetts',
              'Michigan',
              'Minnesota',
              'Mississippi',
              'Missouri',
              'Montana',
              'Nebraska',
              'Nevada',
              'New Hampshire',
              'New Jersey',
              'New Mexico',
              'New York',
              'North Carolina',
              'North Dakota',
              'Ohio',
              'Oklahoma',
              'Oregon',
              'Pennsylvania',
              'Rhode Island',
              'South Carolina',
              'South Dakota',
              'Tennessee',
              'Texas',
              'Utah',
              'Vermont',
              'Virginia',
              'Washington',
              'West Virginia',
              'Wisconsin',
              'Wyoming',
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={2}>
          <LoadingButton
            className={styles.submitButton}
            loading={artistSearchResult?.results?.loading}
            disabled={artistSearchResult?.results?.loading}
            onClick={filterHandler}
          >
            <Box sx={{ textAlign: 'center', width: '100%' }}>Filter</Box>
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledSearchInput = muiStyled('input')(`
  border: none;
  width: 100%;
  height: 65.75px;
  padding: 20px;

  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;

  opacity: 0.5;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
  line-height: 18px;

  &::placeholder {
    color: white;
    opacity: 50%;
  }

  &:focus {
    outline: none;
    width: 100%;
  }
`);

const useFormLabelStyles = makeStyles({
  submitButton: {
    fontFamily: 'var(--font-family-montserrat)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderRadius: '8px',
    background: 'var(--button-primary)',
    height: '65.75px',
    padding: '20px',
    opacity: 0.5,
    fontSize: 'var(--font-size-l2)',
    letterSpacing: '0',
    lineHeight: '18px',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      opacity: 1,
      transition: '0.3s',
      boxShadow: '0px 0px 16px rgba(250, 250, 250, 0.16)',
    },
  },
});

export default ArtistFilterBar;
