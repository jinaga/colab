import { j } from '../jinaga-config';
import { Alert, Box, Snackbar, SxProps } from '@mui/material';
import Button from '@mui/material/Button';
import { Project, ProjectName } from '../model/project';
import { uuid } from '@stablelib/uuid';
import { useUser } from '../providers/UserProvider';
import { ProjectDialog, ProjectInfo } from './ProjectDialog';
import { useState } from 'react';

interface NewProjectButtonProps {
  sx?: SxProps | undefined;
}

export function NewProjectButton({ sx }: NewProjectButtonProps) {
  const [createReplicatorInfo, setCreateReplicatorInfo] = useState<ProjectInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const user = useUser();

  const handleClickOpen = () => {
    setCreateReplicatorInfo({
      projectName: ''
    });
  };

  const handleErrorClose = () => {
    setError(null);
  };

  const createReplicator = async ({ projectName }: ProjectInfo) => {
    const replicator = await j.fact(new Project(user!, uuid()))
    await j.fact(new ProjectName(replicator, projectName, []));
  };

  const onComplete = (info: ProjectInfo) => {
    createReplicator(info)
      .then(() => setCreateReplicatorInfo(null))
      .catch((e) => setError(e));
  };

  const onClose = () => setCreateReplicatorInfo(null);

  return (
    <Box sx={sx}>
      <Button variant="contained" onClick={handleClickOpen}>
        New replicator
      </Button>
      <ProjectDialog title='New Replicator' info={createReplicatorInfo} onComplete={onComplete} onClose={onClose} />
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          {error?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}