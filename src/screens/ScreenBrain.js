import { Stack } from "@mui/system";
import { Grid, Typography, ImageList, ImageListItem, Accordion } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "mui-image";

//Need to import all of your pictures before using
import picGlial from '../images/glial.webp'
import picNeuron from '../images/neuron-structure.jpeg'

import picDifferentProcessing from '../images/brain-screen-different-processing-systems.jpeg'
import picCrocodileHumanCompare from '../images/brain-screen-croc-human-brains.png'
import picElephantHumanCompare from '../images/brain-screen-elephant-human-brain-comparison.jpeg'
import picHumanBrain from '../images/brain-screen-human-brain.webp'

const ScreenBrain = () => {

    const padding = {
        padding: 10
    }

    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={30} marginRight={30}>

            {/* ............................... */}
            {/* 1st section */}
            {/* ............................... */}

            <Grid container direction="row" spacing={3}>

                <Grid item xs={12}>
                    <Typography variant="h4" align="center"> What is The Function of The Brain?</Typography>
                </Grid>

                <Grid container direction="column" sm={6}>
                    <Typography style={padding} variant="body1" >The brain is a massive parallel, distributed control system that attempts to maintain certain metabolic variables within acceptable bounds in the body while fulfilling a procreative mission. More concretely, brains maintain homeostasis, motivation, learning and memory, and sleep. The brain also needs to do this while responding to a variety of unpredictable circumstances internal and external to the body!</Typography>

                    <Typography style={padding} variant="body1" >In the animal kingdom, different types of organisms have varying nervous systems to house their brain. Invertebrates tend to contain distributed systems (i.e octopi with 9 brains, jelly fishes with “nerve nets”) while vertebrates yield more centralized and specialized systems. Vertebrates all share a basic structure of a central nervous system (CNS) containing a brain and spinal cord connected to a peripheral nervous system (PNS) made up of peripheral sensory and motor nerves.</Typography>
                </Grid>

                {/* figure for human brain */}
                {/* 3d figure of brain would be cooler */}
                <Grid container direction="row" sm={12} md={6}>
                    <Image src={picDifferentProcessing} height="100%" width="100%" />
                    <Typography variant="body1" align="center">The diversity of different nervous systems' composition and structure  </Typography>
                </Grid>
            </Grid>


            {/* ............................... */}
            {/* 2nd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center"> The General Structure of a Human Brain</Typography>
                </Grid>

                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Typography variant="h5" style={padding} align="center">Cell Composition</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" style={padding}>Brains contain two broad classes of cells: neurons and synapses. Neurons act as electrical signal transmitters within the brain. Synapses connect neurons together to actually pass these electrical signals. There are also glial cells, non-neuronal cells which provide physical and metabolic support to neurons. </Typography>
                    </Grid>



                    {/* Picture 1 */}
                    <Grid container direction="row" xs={6}>
                        <Grid item xs={12}>
                            <Image src={picGlial} height="100%" width="100%" fit="fill" />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1" align="center">Glial cells' structure</Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" xs={6}>
                        <Grid item xs={12}>
                            <Image src={picNeuron} height="100%" width="100%" fit="fill" />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1" align="center">Neuron structure</Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container direction="column" xs={6}>

                    <Typography variant="h5" style={padding}>Basal Ganglia</Typography>

                    <Typography variant="body1" style={padding}>These are the interconnected brain areas and have roles in movement control and motivation. Damage to the basal ganglia leads to motor impairments</Typography>

                    <Typography variant="h5" style={padding}>Thalamus</Typography>

                    <Typography variant="body1" style={padding}>This acts as a middle layer between the cortex and body inputs. It modulates sensory and motor awareness depending on attention and arousal states.</Typography>

                    <Typography variant="h5" style={padding}>Hypothalamus</Typography>

                    <Typography variant="body1" style={padding}>The structure underneath the thalamus. It regulates homeostasis and ensures key functions such as caloric intake, energy expenditure, and body temperature, and sleep are kept at in appropriate levels</Typography>

                    <Typography variant="h5" style={padding}>Cerebellum </Typography>

                    <Typography variant="body1" style={padding} >Latin for “little brain”. The cerebellum controls balance ,coordination, and learning new motor skills</Typography>

                    <Typography variant="h5" style={padding}>Brain Stem </Typography>

                    <Typography variant="body1" style={padding}>Helps to realty signals between brain and spinal cord. Coordinates the motor control signals sent from the brain to the body. Also controls several important functions related to homeostasis such as breathing, arousal, and digestion.</Typography>

                    <Typography variant="h5" style={padding}>Deep Visualization </Typography>

                    <Typography variant="body1" style={padding}>To view a 3d model of the brain, visit the following <a target="_blank" href="https://www.brainfacts.org/3d-brain#intro=true">link</a> from brainfacts</Typography>
                </Grid>

                <Grid container direction="row" xs={6} >


                    {/* <Grid container direction="column" xs={12}>
                        <Image src={picNeuron} height="100%" width="100%" fit="fill" />
                        <Typography variant="body1" align="center">neurons</Typography>
                    </Grid> */}

                    <Grid container direction="column" xs={12} alignSelf="center">
                        <Image src={picHumanBrain} height="50%" width="100%" fit="fill" />
                        <Typography variant="body1" align="center">Model of the human brain.</Typography>
                    </Grid>

                    {/* alligator v.s human v.s other brains */}
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" style={padding}></Typography>
                </Grid>

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
                            <Typography variant="body1">The pineal gland is the only structure in the brain that is only one, instead of two symmetrical parts. </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                

                



            </Grid>


            {/* ............................... */}
            {/* 3rd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" > Varying Different Parameters of Brain</Typography>
                </Grid>

                <Grid container direction="column">
                    <Typography variant="body1" style={padding}>The amount of ways that organisms' brains can vary is vast. Generally, there are trends for brain structures for categories of organisms. For instance, on average, predators have larger brains than their prey. Mammals have larger brain-to-body ratios than other vertebrates. To put this into perspective, an entire alligator's brain would fill up about one and a half teaspoons while a human brain weighs on average 1.5 kg.</Typography>

                    <Typography variant="body1" style={padding}>Generally brain structures that represent a greater percentage of volume also have higher relative importance to an animal's use. For instance, the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>

                    <Typography variant="body1" style={padding}>A larger brain or brain structures however does not indicate "more intelligence". Although the elephant cerebral cortex weighs twice as much as the human cortex, it only has one-third the amount of neurons humans have in their cerebral cortex the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>
                </Grid>

                <Grid container direction="row" justifyContent="center">

                    <Grid container direction="row" xs={11}>
                        <Image src={picElephantHumanCompare} height="100%" width="100%" />
                        <Typography variant="body1" align="center">Info-sheet demonstrating human brain size relative to other animals. Note that although the elephant has a brain more than twice the size of a human's, it still contains three times less neurons.</Typography>
                    </Grid>

                    {/* alligator v.s human v.s other brains */}
                </Grid>


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
                            <Typography variant="body1">Want to increase brain prowess? The formation of new synpases and new neurons arise from "bioenergetic challenges". That is, forms of environmental energetic stressors most notably in the form of food deprivation and physical exertion can improve brain function. Practically, intermittent fasting and regular exercise can achieve this.  </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>

            



        </Stack>


    )
}

export default ScreenBrain;