import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  headerContainer: {
    flexGrow: 1,
  },
  middleHeaderContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLinks: {
    fontWeight: 'bold !important',
    fontSize: '10px !important',
    lineHeight: '150% !important',
    paddingLeft: '20px !important',
    paddingRight: '20px !important',
  },
  headerSignUpButton: {
    fontWeight: 'bold !important',
    fontSize: '10px !important',
    color: '#FFFFFF !important',
    backgroundColor: '#2F80ED !important',
    borderRadius: '1000px !important',
    height: '43px !important',
    width: '97px !important',
    marginLeft: '10px !important',
  },
  footer: {
    backgroundColor: '#0E1B41 !important',
    maxHeight: '520px !important',
  },
  socialButtons: {
    width: '37px',
    height: '37px',
    backgroundColor: 'rgba(220, 220, 220, 0.06) !important',
    backdropFilter: 'blur(60px)',
    borderRadius: '100px !important',
    color: 'white !important',
  },
  socialIcon: { fontSize: '1.2rem' },
  form: {
    width: '100%', // Fix IE 11 issue.
    '& label': {
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 300,
    },
    '& label.Mui-focused': {
      color: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
      },
      '& input': {
        color: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #ffffff',
      },
      '&.Mui-focused input': {
        color: '#ffffff',
      },
    },
  },
  footerLink: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: 'var(--font-size-m)',
      color: 'var(--iron)',
      paddingLeft: 0,
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      lineHeight: '17px',
      minHeight: '17px',
      textTransform: 'capitalize',
      textAlign: 'left',
      textDecoration: 'none',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: 'var(--font-size-m)',
      color: 'var(--iron)',
      padding: 0,
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      lineHeight: '17px',
      textTransform: 'capitalize',
      textAlign: 'left',
      textDecoration: 'none',
    },
  },
  footerTopSection: {
    padding: '40px',
  },
  footerBottomSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    height: 83,
    paddingTop: 20,
  },
  footerCopyrightText: {
    marginTop: '10px !important',
  },
  footerLabel: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    color: 'lightgray !important',
    marginBottom: '10px !important',
  },
}));
