import * as React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '@mui/material';
import { cloudflareImage } from '@/utility/images';

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Arrow = styled.img`
  width: 16px;
  height: 16px;
`;

const GoToCommunity = styled.div`
  ${ValignTextMiddle}
  height: 12px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-s2);
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Root = styled.div`
  width: 235px;
  height: 136px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface ArtistProfileMenuProps {
  data: MenuItem[];
  artist: any;
}

const data: MenuItem[] = [
  { id: 1, label: "What's next", link: '' },
  { id: 2, label: 'Search for a wall', link: '' },
  { id: 3, label: 'Share profile', link: '' },
  { id: 4, label: 'Go to community', link: '' },
];

export const ArtistProfileMenu: React.FC = (ArtistProfileMenuProps) => {
  return (
    <Root>
      {data.map((item: MenuItem, index: number) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <GoToCommunity>{item.label}</GoToCommunity>
          <Arrow
            src={cloudflareImage(
              'https://anima-uploads.s3.amazonaws.com/projects/6183b50129320a0a5485eeaf/releases/6183f96c02337c8be68c1f55/img/frame@2x.svg'
            )}
          />
        </Box>
      ))}
    </Root>
  );
};
