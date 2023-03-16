import { AppBar, Grid, Paper, Toolbar } from '@mui/material';
import { NewProjectButton } from './NewProjectButton';

export function ProjectsPage() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <NewProjectButton sx={{ mr: 1 }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}