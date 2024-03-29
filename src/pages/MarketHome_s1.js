// material
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Container, Stack, Grid, Typography, Button, Card } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
// components
import Page from '../components/Page';
import HomeAssetCard from '../components/HomeAssetCard';
import { MHidden } from '../components/@material-extend';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  background: 'linear-gradient(#ffe0e0 15%, transparent 25%)',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  },
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(3)
  }
}));
const StackStyle = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.up('sm')]: {
    '& .MuiPaper-root': {
      width: '30%',
      height: '100%',
      minWidth: '250px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& .MuiPaper-root': {
      marginTop: theme.spacing(2)
    }
  }
}));
const CardStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    '& img': {
      width: '25%',
      height: '100%',
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& img': {
      maxWidth: 300,
      margin: '0 auto 32px'
    }
  },
  '& div.MuiBox-root': {
    minWidth: 0,
    flexGrow: 1,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 48
    }
  }
}));

const TitleStyle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 64 / 48,
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.3rem'
  },
  '@media (min-width:900px)': {
    fontSize: '2.5rem'
  },
  '@media (min-width:1200px)': {
    fontSize: '2.7rem'
  }
}));

// ----------------------------------------------------------------------

export default function MarketHome() {
  React.useEffect(() => {
  }, []);

  return (
    <RootStyle title="Explorer | PASAR">
      <Box draggable = {false} component="img" src="/static/corner-logo.png" sx={{ width: '50%', maxWidth: '550px', position: 'absolute', top: 0, right: 0 }} />
      {/* <Container sx={{pt: 4, mb: '100px', position: 'relative'}}>
        <StackStyle>
          <Box sx={{ flexGrow: 1 }}>
            <TitleStyle component="h1">
              Discover Web3.0 marketplace<br/>on Pasar
            </TitleStyle>
            <Typography variant="h4" component="div" sx={{fontWeight: 'normal', pb: 3}}>
              Pasar is the largest NFT marketplace<br/>on Elastos
            </Typography>
            <Stack spacing={1} direction="row">
              <Button to="/marketplace" variant="contained" component={RouterLink}>
                Marketplace
              </Button>
              <Button to="/create" variant="outlined" component={RouterLink}>
                Create
              </Button>
            </Stack>
          </Box>
          <HomeAssetCard/>
        </StackStyle>
      </Container>
      <Container maxWidth="md">
        <CardStyle>
          <Box component="div" sx={{pb:'0 !important'}}>
            <TitleStyle component="h1">
              Get started with Essentials
            </TitleStyle>
            <Typography variant="p" component="div" sx={{color: 'text.secondary'}}>
              Easy onboarding to set up automatically decentralized identifier (DID)
              and wallet from Elastos Essentials Super Wallet.<br/>
              <br/>
              Discover Elastos’ Web3.0 technology stacks all in a single 
              app such as DID, decentralized personal storage,
              multiple blockchains support (BTC, ETH, ELA ,BSC, etc.),
              Decentralized Autonomous Organization (DAO) and
              so much more!
            </Typography>
            <Stack spacing={1} direction="row" sx={{mt: 2}}>
              <Button variant="contained" href="#" startIcon={<AdbIcon />}>
                Google Play
              </Button>
              <Button variant="outlined" href="#" startIcon={<AppleIcon />}>
                App Store
              </Button>
            </Stack>
          </Box>
          <Box draggable = {false} component="img" src="/static/essentials.png" />
        </CardStyle>
        <CardStyle>
          <Box component="div">
            <TitleStyle component="h1">
              Elastos Smart Chain (ESC)
            </TitleStyle>
            <Typography variant="p" component="div" sx={{color: 'text.secondary'}}>
              We chose to build on ESC because of its fast transactions and super cheap gas fees.<br/>
              <br/>
              You can purchase ELA on smart chain through the Essentials
              app from Glide Finance, a decentralized exchange (DEX) also built
              on the Elastos Smart Chain (ESC).
            </Typography>
          </Box>
          <Box draggable = {false} component="img" src="/static/glide.png" sx={{p: {xs: '0px 32px 32px', sm: 0}}} />
          <Stack spacing={1} direction="row" sx={{position: 'absolute', bottom: 32, mr: 4}}>
            <Button variant="contained" href="#">
              Get ELA on Glide Finance
            </Button>
            <Button variant="outlined" href="#">
              Learn more about ESC
            </Button>
          </Stack>
        </CardStyle>
        <CardStyle>
          <Box component="div">
            <TitleStyle component="h1">
              List your work on Pasar
            </TitleStyle>
            <Typography variant="p" component="div" sx={{color: 'text.secondary'}}>
            Sign in with DID, connect wallet, upload your work, and add other important details.<br/>
            <br/>
            Choose how you want to set up your work on Pasar and
            you’re done! We’ll do the rest of the selling for you!
            </Typography>
          </Box>
          <Box draggable = {false} component="img" src="/static/logo.svg" sx={{p: 3}}/>
          <Stack spacing={1} direction="row" sx={{position: 'absolute', bottom: 32}}>
            <Button variant="contained" href="#">
              Sign in with DID
            </Button>
            <Button variant="outlined" href="#">
              Create
            </Button>
          </Stack>
        </CardStyle>
      </Container> */}
    </RootStyle>
  );
}
