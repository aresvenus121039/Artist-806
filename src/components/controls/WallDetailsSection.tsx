import React from 'react';
import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';
import {
  Wash,
  Stairs,
  LocalParking,
  Wifi,
  FormatPaint,
  PresentToAll,
  BlurLinear,
  FormatColorFill,
  Shower,
  BathtubRounded,
} from '@mui/icons-material';
import { CSSProperties, makeStyles } from '@mui/styles';
import _ from 'lodash';
import { cloudflareImage } from '@/utility/images';
import { getRichDescription } from '@/utility/getRichDescription';

// import { isDueDate } from '@/utility/index';

import WallDetailsHeadInfo from './WallDetailsHeadInfo';
import WallDetailsBoxIcon from './WallDetailsBoxIcon';
import WallDetailsTextIcon from './WallDetailsTextIcon';
import WallDetailsLabel from './WallDetailsLabel';
import { Theme } from '@mui/system';

interface WallDetailsSectionProps {
  title?: string;
  status?: string;
  location?: string;
  dateListed?: string;
  dateDueDate?: string;
  totalProposal?: string;
  surfaceArea?: string;
  wallArea?: string;
  brick?: string;
  scope?: string;
  categoryBuilding?: string;
  textDescription?: string;
  crypto?: boolean;
  textAdditionalInfo?: string;
  condition?: string;
  artStyles?: string[];
  createdAt?: string;
  direction?: string;
  color_scheme?: string[];
  amenities?: string[];
}

interface AmenitiesInfo {
  id: string;
  label: string;
  icon: any;
  type?: string;
}

interface WallDetailsHeadInfoProps {
  location?: string;
  dateListed?: string;
  dateDueDate?: string;
  totalProposal?: string;
  createdAt?: string;
}

const amenitiesInfo: AmenitiesInfo[] = [
  {
    id: 'Bathroom',
    label: 'Bathroom',
    icon: BathtubRounded,
  },
  {
    id: 'Electricity',
    label: 'Electricity',
    icon: 'icon-outdoor-electricity.svg',
    type: 'img',
  },
  {
    id: 'Lift Onsite',
    label: 'Lift Available',
    icon: Stairs,
    // icon: 'icon-ladder.svg',
    // type: 'img',
  },
  { id: 'Parking - Paid ', label: 'Paid Parking', icon: LocalParking },
  { id: 'Primed', label: 'Primed', icon: '' },
  { id: 'Slop Sink', label: 'Slop Sink', icon: Wash },
  { id: 'Wifi', label: 'Wifi', icon: Wifi },
  {
    id: 'Extra Paint Available',
    label: 'Extra Paint Available',
    icon: FormatPaint,
  },
  { id: 'Parking - Free', label: 'Free Parking', icon: LocalParking },
  {
    id: 'Outdoor Electricity',
    label: 'Outdoor Electricity',
    icon: 'icon-outdoor-electricity.svg',
    type: 'img',
  },
  { id: 'Paint Gun', label: 'Paint Gun', icon: FormatColorFill },
  { id: 'Power Washer', label: 'Power Washer', icon: Shower },
  { id: 'Projector', label: 'Projector', icon: PresentToAll },
  { id: 'Scaffolding', label: 'Scaffolding', icon: BlurLinear },
];

const useStyles = makeStyles((theme: Theme) => {
  const commonStyles = {
    fontWeight: 900,
    fontFamily: 'var(--font-family-montserrat)',
    fontStyle: 'normal',
    letterSpacing: '-0.05em',
    backgroundImage:
      'linear-gradient(90deg, rgba(169,132,255,1) 0%, rgba(100,225,220,1) 49%, rgba(111,194,255,1) 100%) !important',
    backgroundSize: '100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'left',
    textTransform: 'capitalize',
  };

  const getStyles = (fontSize: string, lineHeight: string | null = null) => ({
    fontSize,
    lineHeight,
    ...commonStyles,
  });

  const typographyBase: CSSProperties = {
    color: '#FFFFFF',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: '700',
    fontStyle: 'normal',
  };

  return {
    sectionHeading: {
      [theme.breakpoints.only('xs')]: getStyles('32px'),
      [theme.breakpoints.only('sm')]: getStyles('32px'),
      [theme.breakpoints.only('md')]: getStyles('60px', '90px'),
      [theme.breakpoints.only('lg')]: getStyles('60px', '90px'),
      [theme.breakpoints.only('xl')]: getStyles('60px', '90px'),
    },
    typography: {
      ...typographyBase,
      fontSize: '16px', // default to xs size
      marginBottom: '16px', // default to xs size
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        marginBottom: '24px',
      },
    },
  };
});

const WallDetailsSection: React.FC<WallDetailsSectionProps> = (props) => {
  const {
    title,
    status,
    location,
    dateListed,
    dateDueDate,
    totalProposal,
    surfaceArea,
    wallArea,
    brick,
    scope,
    categoryBuilding,
    textDescription,
    crypto,
    textAdditionalInfo,
    condition,
    // wallType,
    artStyles,
    createdAt,
    // acceptCrypto,
  } = props;
  const classes = useStyles();

  const direction = _.get(props, 'direction', '') || '';
  const color_scheme = _.get(props, 'color_scheme', []) || [];
  const amenities = _.get(props, 'amenities', []) || [];

  const extractWallDetailsHeadInfoProps = (
    props: WallDetailsHeadInfoProps
  ) => ({
    styleWrap: { marginBottom: { xs: '24px', md: '52.73px' } },
    textLocation: props.location,
    textListed: props.dateListed,
    textDueDate: props.dateDueDate,
    textTotalProposal: props.totalProposal,
    createdAt: props.createdAt,
  });

  const defaultMargin = (): { xs: string; md: string } => ({
    xs: '40px',
    md: '60px',
  });
  const gridSpacing = (): { xs: number; md: number } => ({ xs: 2, md: 4 });

  // RENDERS
  const renderWallDetailsBoxIcon = (
    iconImageSrc: string,
    text: string,
    popoverText: string
  ): JSX.Element => (
    <Grid item xs={6} sm={4} md={3}>
      <WallDetailsBoxIcon
        iconImageSrc={cloudflareImage(iconImageSrc)}
        text={text}
        popoverText={popoverText}
      />
    </Grid>
  );

  const renderWallDetailsBoxIcons = (
    wallArea: string = '',
    surfaceArea: string = '',
    brick: string = '',
    scope: string = '',
    direction: string = '',
    categoryBuilding: string = ''
  ): JSX.Element[] => {
    // Add more box icons as needed
    return [
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/full-screen-2@2x.svg',
        wallArea,
        'Wall dimensions in feet'
      ),
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-2@2x.svg',
        surfaceArea,
        'Available to paint'
      ),
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/tower-crane@2x.svg',
        brick,
        'Construction type'
      ),
      <Grid
        item
        md={3}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
          },
        }}
      ></Grid>,
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-5@2x.svg',
        scope,
        'Location of wall'
      ),
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-3@2x.svg',
        direction,
        'Direction wall faces'
      ),
      renderWallDetailsBoxIcon(
        'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-4@2x.svg',
        categoryBuilding,
        'Property type'
      ),
    ];
  };

  return (
    <Container>
      {/* top head */}
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
        }}
      >
        {/* title */}
        <Box
          sx={{
            flex: '0 1 auto',
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexFlow: {
              xs: 'column',
              sm: 'row',
            },
            marginBottom: {
              xs: '12px',
              sm: '0',
            },
          }}
        >
          <Typography
            className={classes.sectionHeading}
            variant="h1"
            sx={{
              marginRight: {
                xs: '0px',
                sm: '12px',
              },
              marginBottom: {
                xs: '6px',
                sm: '0',
              },
              display: 'inline-block',
            }}
          >
            <h1> {title} </h1>
          </Typography>
          {['archived', 'closed'].includes(status as string) && (
            <Box
              sx={{
                padding: '10px 20px',
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: '16px',
                display: 'inline-block',
              }}
            >
              <Typography
                component={'span'}
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                {status}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* head info */}
      <WallDetailsHeadInfo {...extractWallDetailsHeadInfoProps(props)} />

      {/* box icon list */}
      <Grid
        sx={{ marginBottom: defaultMargin() }}
        container
        spacing={gridSpacing()}
      >
        {renderWallDetailsBoxIcons(
          wallArea,
          surfaceArea,
          brick,
          scope,
          direction,
          categoryBuilding
        )}
      </Grid>

      {/* color pallete */}
      <Box
        sx={{
          display: 'none',
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography component="h3" className={classes.typography}>
          Suggested Color Palette
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            '& div:first-of-type': {
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
            },
            '& div:last-child': {
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
            },
          }}
        >
          {color_scheme.map((item, i) => {
            const width = 100 / color_scheme.length;
            return (
              <div
                key={i}
                style={{
                  width: `${width}%`,
                  height: '30px',
                  backgroundColor: item,
                }}
              />
            );
          })}
        </Box>
      </Box>

      {/* description */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography component="h3" className={classes.typography}>
          Description
        </Typography>

        <Typography
          sx={{
            width: '100%',
            marginTop: '10px',
            fontFamily: 'var(--font-family-montserrat)',
            color: 'var(--iron)',
            letterSpacing: '0',
            marginBottom: '-5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 'var(--font-size-m)',
            fontWeight: '500',
            fontStyle: 'normal',
            lineHeight: '28.2px',
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: getRichDescription(textDescription),
            }}
          />
        </Typography>
      </Box>

      {/* additional info */}
      {textAdditionalInfo && (
        <Box
          sx={{
            marginBottom: {
              xs: '40px',
              md: '60px',
            },
          }}
        >
          <Typography component="h3" className={classes.typography}>
            Additional Info
          </Typography>

          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
              fonWeight: '400',
              fontStyle: 'normal',
              lineHeight: '28.2px',
            }}
          >
            {textAdditionalInfo}
          </Typography>
        </Box>
      )}

      {/* accommodations */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'baseline',
          }}
        >
          <Typography component="h3" className={classes.typography}>
            Accommodations
          </Typography>

          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
              fonWeight: '400',
              fontStyle: 'normal',
              lineHeight: '28.2px',
              marginBottom: {
                xs: '16px',
                sm: '24.29px',
              },
              paddingLeft: '8px',
            }}
          >
            Available at the property
          </Typography>
        </Box>

        <Grid
          sx={{
            maxWidth: '470px',
            marginBottom: {
              xs: '40px',
              md: '60px',
            },
          }}
          container
          spacing={{
            xs: 2,
            md: 4,
          }}
        >
          {amenities.map((item, i) => {
            const details = amenitiesInfo.find(
              (i: AmenitiesInfo) => i.id === item
            ) as AmenitiesInfo;
            const { icon: Icon, type } = details || {};
            return (
              <Grid key={i} item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {Icon &&
                    (type === 'img' ? (
                      <CardMedia
                        component="img"
                        src={`/${Icon}`}
                        sx={{
                          width: {
                            xs: '16px',
                            md: '24px',
                          },
                          height: {
                            xs: '16px',
                            md: '24px',
                          },
                        }}
                      />
                    ) : (
                      <Icon
                        sx={{
                          width: {
                            xs: '16px',
                            md: '24px',
                          },
                          height: {
                            xs: '16px',
                            md: '24px',
                          },
                        }}
                      />
                    ))}
                  <Typography
                    component="p"
                    sx={{
                      color: '#D8D8D8',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: {
                        xs: '12px',
                        md: '16px',
                      },
                      fontWeight: '500',
                      fontStyle: 'normal',
                      marginLeft: '10px',
                    }}
                  >
                    {details?.label || item}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* details */}
      <Box
        sx={{
          marginBottom: {
            xs: '40px',
            md: '60px',
          },
        }}
      >
        <Typography component="h3" className={classes.typography}>
          Wall Details
        </Typography>

        <WallDetailsTextIcon
          text={` ${condition}`}
          iconImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188ec2d5ccaaa2d0a5b6d4e/img/vector@2x.svg"
          styleWrap={{
            marginBottom: {
              xs: '16px',
              sm: '18px',
            },
          }}
        />
      </Box>

      {/* interested art styles */}
      {artStyles && (
        <Box>
          <Typography component="h3" className={classes.typography}>
            Interested Art Styles
          </Typography>

          <Grid container spacing={0}>
            <Grid item sm={10}>
              {artStyles?.map((item) => (
                <WallDetailsLabel
                  text={item}
                  styleWrap={{
                    margin: '0 12px 24px 0',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(60px)',
                  }}
                />
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default WallDetailsSection;
