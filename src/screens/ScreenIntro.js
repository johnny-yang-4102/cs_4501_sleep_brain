import { Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";


const ScreenIntro = () => {
    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={15} marginRight={15}>

            {/* Example section 1 */}
            <Grid item>
                <Typography variant="h5" >Example Section 1 </Typography>
            </Grid>

            <Grid container direction="row" >
                <Grid item xs={8}>
                <Typography variant="body1" >more spacemore space more space more space more space more space more space more space more spacemore space more space more space more space more space more space more space more spacemore space more space more space more space more space more space more space more spacemore space more space more space more space more space more space more space more spacemore space more space more space more space more space more space more space  </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1" >less spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless spaceless space </Typography>
                </Grid>
            </Grid>


            {/* Example section 2 */}
            <Grid item>
                <Typography variant="h5" >Example Section 2 </Typography>
            </Grid>

            <Grid container direction="row" >
                <Grid item xs={4}>
                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
            </Grid>

            <Grid item>
                <Typography variant="h5">Heading 3</Typography>
            </Grid>

        </Stack>
    );
}


export default ScreenIntro;