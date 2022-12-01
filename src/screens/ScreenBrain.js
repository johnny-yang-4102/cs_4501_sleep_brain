import { Stack } from "@mui/system";
import { Divider, Grid, Typography, ImageList, ImageListItem } from "@mui/material";

import Image from "mui-image";

//Need to import all of your pictures before using
import picBrain from '../images/brain.png'
import picGlial from '../images/glial.webp'
import picNeuron from '../images/neuron-structure.jpeg'

const ScreenBrain = () => {


    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={30} marginRight={30}>

            {/* ............................... */}
            {/* 1st section */}
            {/* ............................... */}

            <Grid container direction="row" spacing={3}>

                <Grid item xs={12}>
                    <Typography variant="h4" > What is the Function of the Brain?</Typography>
                </Grid>



                <Grid item xs={12}>
                    <Typography variant="body1" >The brain is a massive parallel, distributed control system that attempts to maintain certain metabolic variables within acceptable bounds in the body while fulfilling a procreative mission. More concretely, brains maintain homeostasis, motivation, learning and memory, and sleep. The brain also needs to do this while responding to a variety of unpredictable circumstances internal and external to the body!</Typography>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="body1" >In the animal kingdom, different types of organisms have varying nervous systems to house their brain. Invertebrates tend to contain distributed systems (i.e octopi with 9 brains, jelly fishes with “nerve nets”) while vertebrates yield more centralized and specialized systems. Vertebrates all share a basic structure of a central nervous system (CNS) containing a brain and spinal cord connected to a peripheral nervous system (PNS) made up of peripheral sensory and motor nerves.</Typography>
                </Grid>

            </Grid>

            {/* figure for human brain */}
            <Grid item xs={12} >
                <Image src={picBrain} height="50%" width="50%" />
            </Grid>

            {/* ............................... */}
            {/* 2nd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item>
                    <Typography variant="h4" > The General Structure of the Brain</Typography>
                </Grid>

                <Grid item xs={6} >
                    <ImageList sx={{ width: "50%", height: "50%" }} cols={2} rowHeight={164}>
                        <ImageListItem>
                            <img src={picGlial} alt="glial cells" />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={picNeuron} alt="neuron structure" />
                        </ImageListItem>



                    </ImageList>
                </Grid>

                <Grid item >
                    <Typography variant="body1" >Brains contain two broad classes of cells: neurons, information transmitters, across connections called synapses. There are also glial cells, non-neuronal cells which provide physical and metabolic support to neurons.</Typography>
                </Grid>
            </Grid>


            {/* ............................... */}
            {/* 3rd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" > Varying Different Parameters of Brain</Typography>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="body1" >The amount of ways that organisms' brains can vary is vast. Generally, there are trends for brain structures for categories of organisms. For instance, on average, predators have larger brains than their prey. Mammals have larger brain-to-body ratios than other vertebrates. To put this into perspective, an entire alligator's brain would fill up about one and a half teaspoons while a human brain weighs on average 1.5 kg.</Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="body1" >Generally brain structures that represent a greater percentage of volume also have higher relative importance to an animal's use. For instance, the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1" >A larger brain or brain structures however does not indicate "more intelligence". Although the elephant cerebral cortex weighs twice as much as the human cortex, it only has 1/3 the amount of neurons humans have in their cerebral cortex the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>
                </Grid>


            </Grid>



        </Stack>


    )
}

export default ScreenBrain;