import React from 'react';
import {
  Step,
  Stepper,
  Box,
  StepLabel,
  Typography,
  styled,
  StepConnector,
  stepConnectorClasses,
} from '@mui/material';
import Check from '@mui/icons-material/Check';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00C8C8',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00C8C8',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ active: boolean }>(
  ({ theme, active }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#00C8C8',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(active && {
      color: '#00C8C8',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#00C8C8',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: '#00C8C8',
    },
  })
);

interface QontoStepIconProps {
  active: boolean;
  completed: boolean;
  className?: string;
}

function QontoStepIcon(props: QontoStepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot active={active} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

interface StepperCustomProps {
  styleWrap?: React.CSSProperties;
  listText: string[];
  activeStep?: number;
}

const StepperCustom: React.FC<StepperCustomProps> = (props) => {
  const { styleWrap, listText, activeStep = 0 } = props; // activeStep starts from '0'

  return (
    <Box sx={{ ...styleWrap, width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {listText.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: '700',
                  fontSize: {
                    xs: '8px',
                    sm: '12px',
                  },
                }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperCustom;
