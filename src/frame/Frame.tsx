import Box from '@mui/material/Box';
import { Outlet } from 'react-router';

export function Frame() {
  return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <Outlet />
        </Box>
      </Box>
  );
}