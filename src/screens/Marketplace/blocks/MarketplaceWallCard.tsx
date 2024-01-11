import React from 'react';
import styled, { css } from 'styled-components';
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { cloudflareImage } from '@/utility/images';
import Link from 'next/link';

interface MarketplaceWallCardProps {
  wallImageSrc?: string;
  status?: string;
  budget?: number | string;
  location?: string;
  state?: string;
  area?: string;
  dimension?: string;
  styleWrap?: React.CSSProperties;
  slug?: string;
  loading?: boolean;
}

interface ListProps {
  status?: string;
}

export const MarketplaceWallCard: React.FC<MarketplaceWallCardProps> = (
  props
) => {
  const {
    wallImageSrc,
    status,
    budget,
    location,
    state,
    area,
    dimension,
    styleWrap,
    slug,
    loading = false,
  } = props;

  const budgetWithCurrency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(budget) * 0.7);

  return (
    <>
      <Link
        href={`/wall/${slug}`}
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        <Card
          sx={{
            minHeight: '310px !important',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            backgroundColor: 'var(--white)',
            boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)',
            marginBottom: '15px',
            width: 'auto',
            maxWidth: '350px',
            ...styleWrap,
          }}
        >
          {loading ? (
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              }}
            >
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width="100%"
                height="139px"
              />
              <div style={{ marginTop: 20 }}>
                <Skeleton
                  sx={{ bgcolor: 'grey.900' }}
                  variant="text"
                  width="100%"
                />
                <Skeleton
                  sx={{ bgcolor: 'grey.900' }}
                  variant="text"
                  width="100%"
                />
                <Skeleton
                  sx={{ bgcolor: 'grey.900' }}
                  variant="text"
                  width="100%"
                />
              </div>
            </div>
          ) : (
            <CardActionArea
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                width: '100% !important',

                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                }}
              >
                <List status={status} />
                <CardMedia
                  component="img"
                  src={cloudflareImage(
                    wallImageSrc ||
                      'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
                  )}
                  sx={{
                    borderRadius: '16px',
                    height: '140.5px',
                    objectFit: 'cover',
                    minWidth: '100%',
                  }}
                />
              </Box>

              <Box
                sx={{
                  mt: '10px',
                }}
              >
                <Typography
                  sx={{
                    textDecoration: 'none',
                    fontSize: '20px',
                    fontFamily: 'var(--font-family-montserrat)',
                    fontWeight: 700,
                    textTransform: 'capitalize',
                    lineHeight: 1.3,
                    color: 'var(--black-pearl)',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                    textAlign: 'left',
                  }}
                >
                  {location}
                </Typography>
              </Box>

              <Box>
                <CardDetails>
                  <LocationWrapper>
                    <Icon
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/state-icon.svg`}
                    />

                    <DetailText>{state}</DetailText>
                  </LocationWrapper>

                  <SqftWrapper>
                    <Icon
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/dimension-icon.svg`}
                    />
                    <DetailText>{area} SQFT</DetailText>
                  </SqftWrapper>

                  <MeasurementWrapper>
                    <Icon
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/area-icon.svg`}
                    />
                    <DetailText>{dimension}</DetailText>
                  </MeasurementWrapper>
                </CardDetails>
              </Box>

              <Box>
                <BudgetCard>
                  <BudgetTextWrapper>{`${budgetWithCurrency} - Proposed Budget`}</BudgetTextWrapper>
                </BudgetCard>
              </Box>
            </CardActionArea>
          )}
        </Card>
      </Link>
    </>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratMediumQuickSilver12px = css`
  color: var(--quick-silver);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 500;
  font-style: normal;
`;

const List: React.FC<ListProps> = (props) => {
  if (props.status !== 'new') {
    return null;
  }

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
    left: '10px',
    zIndex: 2,
  };

  return (
    <Box sx={styles}>
      {props.status === 'new' ? 'just listed' : props.status}
    </Box>
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
  text-align: center;
  white-space: nowrap;
  line-height: 1.3;
  color: #219653;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  flex-flow: row wrap;
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
  align-items: flex-start;
  margin-left: 2px;
  margin-right: 2px;
  min-width: 74px;
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin-top: -0.5px;
`;

const MeasurementWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 2px;
  min-width: 80px;
`;
