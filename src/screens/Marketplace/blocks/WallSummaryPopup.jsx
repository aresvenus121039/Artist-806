import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '@mui/system';
import _ from 'lodash';
import CircularProgress from '@mui/material/CircularProgress';
import { cloudflareImage } from '@/utility/images';
import { getStateAbbr } from '@/utility/usaStateAbbr';

export const WallSummaryPopup = (props) => {
  const { loading, ...listingDetails } = props;

  const featuredImage = _.get(listingDetails, 'feature_image[0]', []) || [];
  const title = _.get(listingDetails, 'info.title', '') || '';
  const slug = _.get(listingDetails, 'slug', '') || '';
  const city = _.get(listingDetails, 'address.city', '') || '';
  const state = _.get(listingDetails, 'address.state', '') || '';
  const locationOfWall =
    _.get(listingDetails, 'info.location_of_wall', '') || '';
  const height = _.get(listingDetails, 'info.height', '') || '';
  const width = _.get(listingDetails, 'info.width', '') || '';
  const dimension = `${height}H x ${width}L`;

  return (
    <Root>
      <ContentContainer>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 260 - 24,
              height: 97,
            }}
          >
            <CircularProgress size={20} color="secondary" />
          </div>
        ) : (
          <>
            <WallImage
              src={cloudflareImage(
                featuredImage.location ||
                  'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
              )}
            />
            <WallDetails>
              <Box>
                <Street href={`/wall/${slug}`} target="_blank">
                  {title}
                </Street>
                <State>{`${city}, ${getStateAbbr(state)}`}</State>
              </Box>
              <Box>
                <SpecWrapper>
                  <SizeIcon
                    src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/dimension-icon.svg`}
                  />
                  <Size>{dimension}</Size>
                </SpecWrapper>
                <SpecWrapper>
                  <DoorIcon
                    src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/doors-open.svg`}
                  />
                  <Outdoor>{locationOfWall}</Outdoor>
                </SpecWrapper>
              </Box>
            </WallDetails>
          </>
        )}
      </ContentContainer>
      <TooltipArrowIcon
        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/tooltip-arrow-icon.svg`}
      />
    </Root>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratMediumMountainMist14px = css`
  color: var(--mountain-mist);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m2);
  font-weight: 500;
  font-style: normal;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const ContentContainer = styled.div`
  padding: 12px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  gap: 12px;
  width: fit-content;
`;

const WallDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SpecWrapper = styled.div`
  display: flex;
`;

const WallImage = styled.img`
  width: 100px;
  height: 97px;
  border-radius: 4px;
  background-color: var(--quick-silver);
`;

const Street = styled.a`
  ${ValignTextMiddle}
  height: 16px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--black-pearl);
  line-height: 36px;
  white-space: nowrap;
  font-size: var(--font-size-xl);
  font-style: normal;
  letter-spacing: 0em;
  text-decoration: none;
  text-transform: capitalize;
`;

const State = styled.div`
  ${ValignTextMiddle}
  width: 107px;
  height: 12px;
  font-family: var(--font-family-montserrat);
  color: #a5a5a5;
  white-space: nowrap;
  font-size: var(--font-size-xs);
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 8px;
`;

const SizeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Size = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumMountainMist14px}
  margin-left: 12px;
  letter-spacing: 0;
  white-space: nowrap;
  color: rgba(149, 147, 147, 1);
`;

const DoorIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Outdoor = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumMountainMist14px}
  margin-left: 12px;
  letter-spacing: 0;
  white-space: nowrap;
  color: rgba(149, 147, 147, 1);
`;

const TooltipArrowIcon = styled.img`
  width: 18px;
  height: 16px;
  margin-top: -2px;
`;
