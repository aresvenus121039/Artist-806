import * as React from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@mui/styles';
import { getRichDescription } from '@/utility/getRichDescription';

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const useStyles = makeStyles((theme: any) => ({
  description: {
    fontSize: '14px',
    color: '#F1F0F0',
    fontFamily: 'Roboto',
    fontWeight: 300,
    lineHeight: '24px',
    maxHeight: '400px',
    letterSpacing: '2px',
    overflow: 'Hidden',
  },
}));

interface ArtistBioProps {
  children: string;
}

const ArtistBio: React.FC<ArtistBioProps> = (props) => {
  const classes = useStyles();

  return (
    <Root>
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: getRichDescription(props.children) }}
      />
    </Root>
  );
};

export default ArtistBio;
