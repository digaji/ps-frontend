import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Navbar from '../components/navbar/navbar';


export default function Profile() {
  return (
    <>
    <Navbar/>
    <Container>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        PROFILE PAGE
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
