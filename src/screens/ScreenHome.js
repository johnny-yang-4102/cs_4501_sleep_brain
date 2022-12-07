import {Stack} from "@mui/system";
import {Grid, Typography} from "@mui/material";

import Image from "mui-image";

import picBrain from '../images/brainsleep-great.gif'

//Need to import all of your pictures before using


const ScreenIntro = () => {

    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="flex-start" marginLeft={30}
               marginRight={30}>

            <Grid container direction="row" sx={{justifyContent: 'space-between'}}>

                {/* TEXT SECTION regarding introduction, tech, contact  */}
                <Grid container direction="column" alignItems="flex-start" spacing={1} xs={6}>

                    <Grid item>
                        <Typography variant="h4" align="center"> Introduction</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">This site is a general overview covering information on the
                            brain and sleep individually as well as the connections between sleep and the
                            brain. Sleep is fundamental to our health. The consequences of it's absence have been well documented,
                            including a compromised:
                            <ol>
                                <li>immune system</li>
                                <li>insulin/blood glucose system </li>
                                <li>hormone system related to appetite</li>
                                <li>brain, cognitive function becomes impaired</li>
                            </ol>
                            This site will continue to grow and is meant to serve as a repository for what we understand about sleep and the brain </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">This general research was also done in parallel with independent
                            data analysis on mice brain genes during sleep, specifically observing genes that were most
                            up-regulated and down-regulated. This analysis was done with the support of Rivanna
                            super-computing machines.</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4" align="center"> Technologies</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">The technologies to build this site were Netlify and
                            React</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">FASTQC, MULTIQC, Trim Galore (Trimming Software), STAR (Aligner Software), RSEM (Gene Expression Count Software, R, DESeq2 (Gene Expression Analysis Software in R) were used for the data-analysis on mice
                            brain genes affected during sleep. The data from the study was retrieved from this <a rel="noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE137665
">GEO Database</a></Typography>
                    </Grid>


                    <Grid item>
                        <Typography variant="h4" align="center"> Contacts</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">Johnny Yang - jyang@virginia.edu</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">Joey Elsisi - jre3wjh@virginia.edu</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">Sam Thapaliya - sht6qxc@virginia.edu</Typography>
                    </Grid>
                </Grid>


                {/* PICTURE SECTION  */}
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} xs={5}>
                    <Image src={picBrain} height="100%" width="100%" fit="fill"/>
                </Grid>
            </Grid>

        </Stack>

    )

}


export default ScreenIntro;