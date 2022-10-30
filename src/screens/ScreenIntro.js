import { Stack } from "@mui/system";
import { Grid, Typography, Divider } from "@mui/material";

const ScreenIntro = () => {
    return (
        <Stack spacing={4} direction="column">
    
          <Grid item>
            <Typography variant="h5" >Heading </Typography>
          </Grid>
    
    
          <Grid item>
            <Typography variant="h5" >Heading 2</Typography>
          </Grid>
    
          <Grid item>
            <Typography variant="h5">Heading 3</Typography>
          </Grid>
          
        </Stack>
      );
}


export default ScreenIntro;