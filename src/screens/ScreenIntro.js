import { Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";


const ScreenIntro = () => {
    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={15} marginRight={15}>

            {/* Example section 1 */}
            <Grid item>
                <Typography variant="h4" > Why we sleep </Typography>
            </Grid>

            <Grid container direction="row" >
                <Grid item xs={8}>
                    <Typography variant="h5"> Sleep is dangerous </Typography>
                <Typography variant="body1" > We spend a third of our life asleep. This is time that could be spent
                    reproducing, gathering food or gaining resources. Instead, we lie dormant, vulnerable to predators.
                    <br/>
                     Every animal sleeps, and so do some plants. So what is its purpose?
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">  &nbsp;  </Typography>
                    <Typography variant="body1" >You’d expect larger animals to need more sleep, but the inverse is generally true. The owl monkey sleeps 17 hours a day, while Elephants sleep only 2 hours a day.</Typography>
                </Grid>
            </Grid>


            {/* Example section 2 */}
            <Grid item>
                <Typography variant="h4" > Theories for why we sleep</Typography>
            </Grid>

            <Grid container direction="row" >
                <Grid item xs={4}>
                <Typography variant="h5" >Inactivity Theory</Typography>

                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" >Energy Conservation Theory</Typography>
                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" >Restoration Theory</Typography>
                <Typography variant="body1" >equal space equal space equal space equal space equal space equal space equal space equal space equal space  </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" >
                <Grid item xs={4}>
                    <Typography variant="h5" >Brain Plasticity Theory</Typography>
                    <Typography variant="body1" >equal space equal space equal space equal space equal
                        space equal space equal space equal space equal space  </Typography>
                </Grid>
            </Grid>

            <Grid item>
                <Typography variant="h5">Heading 3</Typography>
            </Grid>

        </Stack>
    );
}


export default ScreenIntro;