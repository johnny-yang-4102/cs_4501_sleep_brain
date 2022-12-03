import { Stack } from "@mui/system";
import { Grid, Typography, ImageList, ImageListItem } from "@mui/material";

import Image from "mui-image";

//Need to import all of your pictures before using
import picBrain from '../images/brain.png'
import picGlial from '../images/glial.webp'
import picNeuron from '../images/neuron-structure.jpeg'

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
                <Grid item sm={12} md={6}>
                    <Image src={picBrain} height="100%" width="100%" />
                </Grid>
            </Grid>


            {/* ............................... */}
            {/* 2nd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center"> The General Structure of the Brain</Typography>
                </Grid>


                <Grid container direction="column" xs={6}>
                    <Typography variant="h5" style={padding}>Cell Composition</Typography>

                    <Typography variant="body1" style={padding}>Brains contain two broad classes of cells: neurons and synapses. Neurons act as electrical signal transmitters within the brain. Synapses connect neurons together to actually pass these electrical signals. There are also glial cells, non-neuronal cells which provide physical and metabolic support to neurons. </Typography>

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
                </Grid>

                <Typography variant="h5" style={padding}>inserrt image here </Typography>



            </Grid>


            {/* ............................... */}
            {/* 3rd section */}
            {/* ............................... */}
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" > Varying Different Parameters of Brain</Typography>
                </Grid>

                <Grid container direction="column" xs={6}>
                    <Typography variant="body1" style={padding}>The amount of ways that organisms' brains can vary is vast. Generally, there are trends for brain structures for categories of organisms. For instance, on average, predators have larger brains than their prey. Mammals have larger brain-to-body ratios than other vertebrates. To put this into perspective, an entire alligator's brain would fill up about one and a half teaspoons while a human brain weighs on average 1.5 kg.</Typography>

                    <Typography variant="body1" style={padding}>Generally brain structures that represent a greater percentage of volume also have higher relative importance to an animal's use. For instance, the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>

                    <Typography variant="body1" style={padding}>A larger brain or brain structures however does not indicate "more intelligence". Although the elephant cerebral cortex weighs twice as much as the human cortex, it only has 1/3 the amount of neurons humans have in their cerebral cortex the olfactory bulb, a mass of tissue in the brain involved in the sense of smell, in a mouse versus a human brain is 2% to 0.01% of the brain by volume.</Typography>
                </Grid>




            </Grid>



        </Stack>


    )
}

export default ScreenBrain;