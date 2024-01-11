import React from 'react';
import styled, { css } from 'styled-components';
import { Typography, Skeleton, Card, CardActionArea, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  artistLazyImageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    paddingRight: '10px',
    paddingLeft: '10px',
  },
}));

const JustListed = (props: any) => {
  const styles = {
    padding: '10px',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    display: 'inline-block',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 700,
    fontSize: '12px',
    position: 'absolute',
    top: '10px',
    zIndex: 2,
  };

  return <Box sx={styles}>just listed</Box>;
};

export const SmallWallCard = (props: any) => {
  const classes = useStyles();
  const {
    wallImageSrc,
    status,
    budget,
    location,
    loading,
    state,
    area,
    dimension,
  } = props;

  if (loading) {
    return (
      <Container>
        <Skeleton
          width={'90%'}
          height={'283px'}
          sx={{
            margin: '0 auto',
          }}
        />
      </Container>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: '350px',
        minHeight: '306px',
        width: '100%',
        // minHeight: '283px',
        borderRadius: '16px',
        background: '#FFF',
        border: '1px solid transparent',
      }}
    >
      <CardActionArea
        sx={{
          padding: '15.8px 0',
          display: 'flex',
          flexDirection: 'column',
          alignitems: 'flex-start',
          justifyContent: 'flex-start',
          textAlign: 'left',
        }}
      >
        <WallImageContainer>
          <Box className={classes.artistLazyImageWrapper}>
            <WallImage src={cloudflareImage(wallImageSrc)} />
          </Box>
          {status === 'just listed' && (
            <Box sx={{ ml: '10px' }}>
              <JustListed />
            </Box>
          )}
        </WallImageContainer>

        <Typography
          component={'h2'}
          sx={{
            textDecoration: 'none',
            fontSize: '17px',
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: 700,
            textTransform: 'capitalize',
            lineHeight: 1.3,
            color: 'var(--black-pearl)',
            '&:hover': {
              cursor: 'pointer',
            },
            textAlign: 'left',
            alignSelf: 'flex-start',
            px: '10px',
            pt: '15px',
          }}
        >
          {location}
        </Typography>

        <Box
          sx={{
            px: '10px',
            width: '100%',
          }}
        >
          <CardDetails>
            <LocationWrapper>
              <Icon
                src={cloudflareImage(
                  `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/state-icon.svg`
                )}
              />

              <DetailText>{state}</DetailText>
            </LocationWrapper>

            <SqftWrapper style={{ paddingBottom: '10px' }}>
              <Icon
                src={cloudflareImage(
                  `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/area-icon.svg`
                )}
              />
              <DetailText>{area} SQFT</DetailText>
            </SqftWrapper>

            <MeasurementWrapper>
              <Icon
                src={cloudflareImage(
                  `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/dimension-icon.svg`
                )}
              />
              <DetailText>{dimension}</DetailText>
            </MeasurementWrapper>
          </CardDetails>
        </Box>

        <Box
          sx={{
            alignSelf: 'flex-start',
            px: '10px',
          }}
        >
          <BudgetCard>
            <BudgetTextWrapper>{budget}</BudgetTextWrapper>
          </BudgetCard>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const BudgetCard = styled.div`
  background: rgba(33, 150, 83, 0.06);
  border: 1px solid #219653;
  box-sizing: border-box;
  backdrop-filter: blur(60px);
  border-radius: 8px;
  display: inline-block;
  padding: 8px;
  margin-top: 12px;
`;

const BudgetTextWrapper = styled.div`
  font-size: 12px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  text-align: left;
  white-space: wrap;
  line-height: 1.3;
  color: #219653;
`;

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratMediumQuickSilver12px = css`
  color: var(--quick-silver);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 500;
  font-style: normal;
`;

const Container = styled.div`
  width: 321px;
  display: flex;
  flex-direction: column;
  padding: 15.8px 0;
  align-items: flex-start;
  min-height: 283px;
  border-radius: 16px;
  background: linear-gradient(#121c36, #121c36) padding-box,
    linear-gradient(
        144deg,
        rgba(0, 200, 200, 1) 0%,
        rgba(18, 28, 54, 1) 34%,
        rgba(18, 28, 54, 1) 70%,
        rgba(85, 126, 252, 1) 100%
      )
      border-box;
  border: 1px solid transparent;
`;

const WallImageContainer = styled.div`
  height: 141px;
  position: relative;
  align-self: center;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  width: 100%;
`;

export const WallImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  flex-flow: column nowrap;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 1 auto;
  width: 100%;
  padding-bottom: 12px;
`;

const DetailText = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver12px}
  height: 12px;
  margin-left: 6px;
  line-height: 28.8px;
  text-decoration: capitalize;
  white-space: nowrap;
`;

const SqftWrapper = styled.div`
  display: flex;
  margin-left: 2px;
  flex: 1 1 auto;
  width: 100%;
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin-top: -0.5px;
`;

const MeasurementWrapper = styled.div`
  display: flex;
  margin-left: 2px;
  width: 100%;
  flex: 1 1 auto;
`;
