import {Stack} from "@mui/system";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {Typography, Grid, Popover} from "@mui/material";
import React, {useState} from "react";
import Image from "mui-image";
import picIEG from '../images/IEGmapping.jpeg'
import {blue} from "@mui/material/colors";

const ScreenSleepBrainEffects = () => {
    const padding = {
        padding: 10
    }
    const [isShown, setIsShown] = useState(false);

    return (
        <Stack spacing={4} direction={"column"} justifyContent={"center"} alignItems={"center"} marginLeft={30}
               marginRight={30}>

            {/* ............................... */}
            {/* 1st section */}
            {/* ............................... */}
            <Grid container direction={"row"} spacing={3} sx={{paddingTop: 3}}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">The Brain during Sleep</Typography>
                    <Typography style={padding} variant="body1">
                        There are many observed effects of sleep on the brain. One of them is the removal of brain
                        waste. As
                        stated previously, the brain is involved in almost every aspect of our lives. It’s a massive
                        engine
                        that takes in large amounts of energy and produces waste as a byproduct. No, this waste isn’t
                        like
                        the exhaust of a car, but instead in the form of clumps of peptides like Amyloid Beta. Among
                        brain
                        cells, neurons expend 70–80% of the total energy, with the remaining portion being utilized by
                        glial
                        cells (astrocytes, oligodendrocytes, and microglia). How neurons dispose of their waste was
                        discovered in 2013 by a group of researchers at the University of Rochester in New York. For the
                        rest of the body, the lymphatic system serves to clear waste, but researchers were never able to
                        find a connection between lymph nodes and the brain. This is because an anatomically distinct
                        network of fluid filled channels are what does the brains garbage collection. Instead of
                        transferring lymph, this brains network, now known as that glymphatic system, uses cerebrospinal
                        fluid (CSF). It’s glial cells that control the flow of CSF. Because fluid transport across cell
                        membranes takes a significant amount of energy, the researchers theorized that when the brain
                        wasn’t processing sensory information, it would increase activity in the glymphatic network.
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How did researches make this discovery?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant={"body1"}>
                                They injected a green dye into the necks of mice where CSF was present while they were
                                asleep. Then after 30 minutes, they woke them up and injected a red die into the mice.
                                The
                                researchers found that 60% more CSF flowed into the brains of mice when they were
                                asleep,
                                not when they were awake. It took 2 years of training the mice to fall asleep on the
                                photon
                                microscope needed to view the two dye’s.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12}>
                                        <Typography style={padding} variant="body1">

                    <a href={"https://3dmol.csb.pitt.edu/viewer.html?pdb=1AAP&select=chain:A&style=line&select=chain:B&style=line&select=resi:19,23,26;chain:B&style=cartoon;stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14&select=all&style=cartoon:style~rectangle,color~spectrum"}>
                        1AAP </a> </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Changes in Gene Expression</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography style={padding} variant="body1">
                        Another way to answer the question, “what happens to the brain during sleep?”, is to look at the
                        brain
                        of
                        well rested vs sleep deprived mice. A team of researchers at the Allen Institute for Brain
                        Science
                        did
                        just that. It’s well known that sleep deprivation leads to cognitive impairment, just ask any
                        college
                        student. But why?
                    </Typography>
                    <Typography style={padding} variant={"body1"}>
                    {/*    A systematic <a id={"tiptext"} onMouseEnter={() => setIsShown(true)}*/}
                    {/*onMouseLeave={() => setIsShown(false)}> IEG mapping</a>{isShown && (*/}
                        <em> <a href={"https://en.wikipedia.org/wiki/Immediate_early_gene"} target={"_blank"}>
                            IEG mapping</a> </em> was used to detect neuronal activation using laser microdissection and
                        cDNA microarrays of the mouse brains. Sleep deprivation was found to both induce and suppress
                        IEG expression in subregions of the brain. More specifically, these were the genes found to
                        produce significant changes in their expression: Arc, Egr1, Egr2, Egr3, Fos, Fosb, Fosl2, Nr4a1,
                        Nr4a3.{/*)}*/}
                    </Typography>
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid item xs={12}>
                    <Image src={picIEG} height={"100%"} width={"100%"} justifyContent={"center"} align={"center"}/>
                    </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" align="center"> <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2981377/"} target={"_blank"}> Image Source</a> </Typography>

                        </Grid>
                </Grid>
                <Typography style={padding} variant={"body1"}>
                    The above image is a result of a technique called <em> <a href={"https://www.genome.gov/genetics-glossary/in-situ-hybridization"} target={"_blank"}>In situ hybridization</a>  </em>. 222 genes were
                    selected from the microarray data and fixed to a glass slide. They were then exposed to a small piece of
                    single stranded DNA marked with a fluorescent dye. The fluorescent DNA binds to its target, and this
                    can be seen under a microscope. In the above case, we wanted to mark the Arc gene to see where it
                    was being expressed.
                </Typography>

                <Typography style={padding} variant={"body1"}>
                    If we look at the top row, we see images for sleep deprivation (SD), sleep deprivation control
                    (SDC), recovery sleep (RS), recovery sleep control (RSC) and waking (W). To a biologist, these
                    images are striking. They show a clear physiological difference in the brain when it has not been
                    well rested.

                </Typography>

                <Typography style={padding} variant={"body1"}>
                    But a visual analysis is not satisfactory. The scientists wrote algorithms to quantify the
                    statistical difference between each of the images above and found a statistically significant
                    difference in the molecular makeup of sleep deprived mouse brains.

                </Typography>
                <Typography style={padding} variant={"body1"}>
                    In that same vein, we wanted to quantify differences in the brain DNA of mice …
                </Typography>
            </Grid>


        </Stack>
    )
}

export default ScreenSleepBrainEffects;