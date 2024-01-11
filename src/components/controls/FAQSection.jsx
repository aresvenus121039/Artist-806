import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.down('md')]: {
      fontSize: 'var(--font-size-xxxl)',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '50px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(169,132,255,1) 35.07%, rgba(100,225,220,1) 53.88%, rgba(111,194,255,1) 73.08%, rgba(255,255,255,1) 100%)',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(169,132,255,1) 35.07%, rgba(100,225,220,1) 53.88%, rgba(111,194,255,1) 73.08%, rgba(255,255,255,1) 100%)',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  sectionTitle: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-s2)',
      lineHeight: '29px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#6ab3df',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-xl)',
      lineHeight: '22px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#6ab3df',
      textTransform: 'capitalize',
    },
  },
}));

const FAQData = [
  {
    id: 1,
    question: 'What is WXLLSPACE?',
    answer:
      "Welcome to the future of community development! We are a revolutionary new platform designed to connect creative talent with commissioned public art projects. One that's more creative, sustainable and pleasant. By connecting artists from all over the world with real estate developers, we're helping make placemaking accessible for everyone in need--no matter where they are or what their budget is.  With a marketplace full of opportunities you'll be able cut time and costs by finding exactly what you need. Find walls or artists easily because there are no barriers between creativity and commerce anymore. We believe that placemaking can have the power not only transform communities, but also make our world more beautiful and interesting!",
  },
  {
    id: 2,
    question: 'How do I sign up?',
    answer:
      'Signing up is easy! Click our sign up button and fill out our form to build your landing page so you can start to submit your proposals to commissioned projects across the United States.',
  },
  {
    id: 3,
    question: 'Do you work with curators?',
    answer:
      "Curators are the backbone of our projects. They are the strong and trusted connections in cities all across this world, who help us bring projects to life by making them happen! They help us find new opportunities and make introductions that lead to many amazing murals all across this world! We're always grateful when they integrate with us to build the right connection, whether its the owner of a building, artists or funding.",
  },
  {
    id: 4,
    question: 'How much do you take from artists?',
    answer:
      "0%! Never worry about a percentage of your work being deducted from the payout again. You will always get 100% when working with us and that's guaranteed by our policy, which has been in place since day one!",
  },
  {
    id: 5,
    question: 'Why are we doing this?',
    answer:
      'We have a deep belief that every wall, no matter how difficult or simple it may be, can serve as an opportunity for growth. We believe in this process of development and know real estate provides the perfect platform to promote happiness across cultures by bringing people together from all walks-of life! The positive impact that real estate has on a community is unparalleled. Every city across the world needs more development and new ideas to promote happiness, sustainability and inspiration.',
  },
];

const CustomAccordionSummary = (props) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: '#d8d8d8' }} />}
      aria-controls={props.control}
      id={props.summaryID}
      sx={{
        fontFamily: 'var(--font-family-montserrat)',
        color: '#d8d8d8',
      }}
    >
      <Typography
        sx={{
          fontStyle: 'bold',
          fontWeight: 700,
        }}
      >
        {props.children}
      </Typography>
    </AccordionSummary>
  );
};

const CustomAccordionDetails = (props) => {
  return <AccordionDetails>{props.children}</AccordionDetails>;
};

export const FAQSection = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              className={classes.sectionTitle}
              component="h3"
              variant="h3"
              align="center"
            >
              frequently asked questions
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box className={classes.sectionHeading}>FAQ</Box>
        </Grid>

        <Grid item xl={12} lg={12} md={12} xs={12}>
          <Grid container justifyContent="center" direction="row">
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Container maxWidth="md">
                {FAQData.map(({ id, question, answer }) => (
                  <Accordion
                    key={id}
                    expanded={expanded === `panel${id}`}
                    onChange={handleChange(`panel${id}`)}
                    sx={{
                      background:
                        'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box !important',
                      border: '1px solid transparent !important',
                      borderRadius: '8px !important',
                      marginBottom: '8px',
                    }}
                  >
                    <CustomAccordionSummary
                      control={`panel${id}a-content`}
                      summaryID={`panel${id}a-header`}
                    >
                      {question}
                    </CustomAccordionSummary>

                    <CustomAccordionDetails>
                      <Typography
                        component="p"
                        variant="p"
                        align="left"
                        sx={{
                          fontFamily: 'var(--font-family-montserrat)',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '14px',
                          lineHeight: '31px',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#d8d8d8',
                          maxWidth: '100%',
                        }}
                      >
                        {answer}
                      </Typography>
                    </CustomAccordionDetails>
                  </Accordion>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
