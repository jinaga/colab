import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

export interface ProjectInfo {
  projectName: string;
}
interface ProjectDialogProps {
  title: string;
  info: ProjectInfo | null;
  onComplete: (info: ProjectInfo) => void;
  onClose: () => void;
}
export function ProjectDialog({ title, info, onComplete, onClose }: ProjectDialogProps) {
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (info) {
      setProjectName(info.projectName);
    }
    else {
      setProjectName('');
    }
  }, [info]);

  const valid = () => {
    return projectName.length > 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      projectName,
    });
  };

  return <Dialog open={info !== null} onClose={onClose}>
    <form>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create a project that you can collaborate on with others.
        </DialogContentText>
        <TextField
          margin="dense"
          label="Project name"
          type="text"
          fullWidth
          variant="standard"
          value={projectName}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setProjectName(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>Cancel</Button>
        <Button variant='contained' type='submit' disabled={!valid()} onClick={onSubmit}>Save</Button>
      </DialogActions>
    </form>
  </Dialog>;
}
