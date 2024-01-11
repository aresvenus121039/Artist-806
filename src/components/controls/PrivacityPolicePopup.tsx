import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Link,
} from '@mui/material';
import { GenericButton } from './GenericButton';
import styled from 'styled-components';
import { useEffect } from 'react';

interface PrivacyPolicyDialogProps {
  open: boolean;
  onClose: () => void;
}

export const PrivacyPolicyPopUp: React.FC<PrivacyPolicyDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} fullWidth maxWidth="xs">
      <DialogTitle textAlign="center">
        <Title>WXLLSPACE - Privacy Policy</Title>
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: '400',
            color: 'var(--black)',
            fontSize: 'var(--font-size-l)',
            lineHeight: '1.5',
            textAlign: 'justify',
          }}
        >
          In order to correctly implement all the features of our application,
          we need to access your location, but we also respect the{' '}
          <Link
            sx={{
              fontWeight: '700',
              textDecoration: 'none',
              color: '#64E1DC',
            }}
            target="__blank"
            href="privacy-policy"
          >
            PRIVACY POLICY
          </Link>
          , including the{' '}
          <Link
            sx={{
              fontWeight: '700',
              textDecoration: 'none',
              color: '#64E1DC',
            }}
            target="__blank"
            href="/cookies-policy"
          >
            COOKIES POLICY
          </Link>{' '}
          and{' '}
          <Link
            sx={{
              fontWeight: '700',
              textDecoration: 'none',
              color: '#64E1DC',
            }}
            target="__blank"
            href="/terms-of-use"
          >
            TERMS & CONDITIONS
          </Link>
          .
        </Typography>
      </DialogContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <GenericButton onClick={onClose} title={'Accept'} />
      </div>
    </Dialog>
  );
};

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--electric-violet);
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
`;
