import {Grid, Typography} from "@mui/material";
import React from "react";
import {Stack} from "@mui/system";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";


const ScreenSleep = () => {

    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={15}
               marginRight={15}>

            <Grid item>
                <Typography variant="h3"> Sleep </Typography>
            </Grid>

            {/* Example section 1 */}
            <Grid item>
                <Typography variant="h4"> Why we sleep </Typography>
            </Grid>

            <Grid container direction="row">
                <Grid item xs={12}>
                    <Typography variant="h5"> Sleep is dangerous </Typography>
                    <Typography variant="body1"> We spend a third of our life asleep. This is time that could be spent
                        reproducing, gathering food or gaining resources. Instead, we lie dormant, vulnerable to
                        predators.
                        Every animal sleeps, and so do some plants. So what is its purpose?
                    </Typography>
                </Grid>
                <Typography variant="h5">  &nbsp;  </Typography>
                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Fun Fact</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">You’d expect larger animals to need more sleep, but the inverse
                                is generally true. The owl monkey sleeps 17 hours a day, while Elephants sleep only 2
                                hours a day.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>


            {/* Example section 2 */}
            <Grid item>
                <Typography variant="h4"> Theories for why we sleep</Typography>
            </Grid>

            <Grid container direction="row">
                <Grid item xs={12}>
                    <Typography variant="h5"> Inactivity Theory </Typography>
                    <Typography variant="body1">The idea that animals that remained inactive at night were less
                        likely to get injured, leading to better survival odds.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5"> Energy Conservation Theory </Typography>
                    <Typography variant="body1"> Our metabolism decreases by up to 10% during sleep.
                        This theory suggests that since searching for food is less efficient at night, we sleep instead.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5"> Restoration Theory </Typography>
                    <Typography variant="body1"> Many restorative functions in the body kick in primarily during sleep,
                        like muscle growth, tissue repair protein synthesis and hormone release. The brain also builds
                        up adenosine, a by-product of cell activity, during the day. This is cleared away during sleep.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5"> Brain Plasticity Theory</Typography>
                    <Typography variant="body1"> Many Research findings suggest that the brain is very
                        active during sleep, and that it is connected to changes in the layout and organization of the
                        Brain. During sleep, the brain processes the day's information and filters
                        what is important into long term memory. Infants require about 13 hours of sleep each night,
                        this being a significant age for brain development. Metabolic waste in the brain is also cleaned
                        out
                        at a greater rate than during the day.
                        Our project will hone in on this theory.
                        We will be looking specifically at studies on what goes on inside the brains of mice during
                        sleep.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h4" align={"center"}> Sleep Drive </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row">

                    <Typography variant="body1"> The timed changes in our body follow what is called a Circadian
                        Rhythm. This internal clock is dictated by the Sun and is why you go to bed at night, at a
                        fairly regular time (hopefully). Every cell in
                        our body is tuned to the planet relative to the Sun. The earth spins once every 24 hours on its
                        axis, so our Circadian Rhythm is about 24 hours.

                    </Typography>
                    <Typography variant="body1">
                        When we wake up in the morning, 2 hormones are released by the adrenal glands, Cortisol and
                        Epinephrine. Cortisol makes you
                        alert and ready for the day. It also sets off a 10-12 hour timer for when melatonin will be
                        secreted. Melatonin is secreted from the pineal gland.

                        {/*it is the only structure in the brain*/}
                        {/*that is only one, instead of two symetrical parts.*/}
                        Adenosine, a neurotransmitter, and Melatonin, a hormone, signal to the brain that we need sleep.
                        Adenosine is a byproduct of the break down and usage of <a
                        href={"https://en.wikipedia.org/wiki/Adenosine_triphosphate#:~:text=Adenosine%20triphosphate%20(ATP)%20is%20an,condensate%20dissolution%2C%20and%20chemical%20synthesis."}>
                        ATP </a>. It builds up throughout the day, especially when we work out. When we sleep, Adenosine
                        is cleared from the brain. Caffeine
                        works as a stimulant by blocking adenosine receptors. There is a handful of people that have a
                        mutant adenosine receptor and can drink coffee before bed.
                        Light inhibits melatonin powerfully. Cells know it is night time when melatonin is released.
                    </Typography>
                </Grid>
                <Typography variant="h5">  &nbsp;  </Typography>

                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Fun Fact 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">When you workout has a large impact on your Circadian Rhythm.
                                Most studies are around anaerobic exercise because mice like to run. Optimal Exercise
                                windows depend mostly on body temperature. Ideal times tend to be 30 minutes after
                                waking. Three hours after waking, and 11 hours after waking, which is the late
                                afternoon. These times optimize performance and reduce injury. The best exercise you can
                                do for your sleep is aerobic training in the late afternoon. This is when you body
                                temperature
                                peaks and has been shown to strongly align people's sleep schedules </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Fun Fact 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1"> Melatonin serves two roles. The first is sleep regulation and
                                the
                                second is to suppress the onset of puberty by blocking other hormones. In children,
                                Melatonin
                                is secreted throughout the day. The body does a really careful job of regulating
                                hormones and
                                releases about 0.1 to 0.5 mg to help you fall asleep.
                                Taking Melatonin as a supplement is generally not a good idea. Pills have been found the
                                contain 15% to 400x their advertised
                                amounts, most likely more than you need. </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            <Grid container direction={"row"}>
                <Grid item xs={12}>
                    <Typography variant="h5">  &nbsp;  </Typography>
                </Grid>
            </Grid>

        </Stack>
    );
}

export default ScreenSleep;