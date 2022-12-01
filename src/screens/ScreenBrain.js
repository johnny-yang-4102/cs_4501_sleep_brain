import { Stack } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";

import Image from "mui-image";

//Need to import all of your pictures before using
import picBrain from '../images/brain.png'
import picGlial from '../images/glial.webp'
import picNeuron from '../images/neuron-structure.jpeg'

const ScreenBrain = () => {


    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={30} marginRight={30}>
            <Grid item xs={12}>
                <Typography variant="h4" > What is the Function of the Brain?</Typography>
            </Grid>




            <Grid container direction="column" xs={12} >
                <Grid item >
                    <Typography variant="body1" >The brain is a massive parallel, distributed control system that attempts to maintain certain metabolic variables within acceptable bounds in the body while fulfilling a procreative mission. More concretely, brains maintain homeostasis, motivation, learning and memory, and sleep. The brain also needs to do this while responding to a variety of unpredictable circumstances internal and external to the body!
                    </Typography>
                </Grid>

                {/* TODO - add spacing  */}
                <Divider/>

                <Grid container direction="column" item xs={12} >
                    <Typography variant="body1" >In the animal kingdom, different types of organisms have varying nervous systems to house their brain. Invertebrates tend to contain distributed systems (i.e octopi with 9 brains, jelly fishes with “nerve nets”) while vertebrates yield more centralized and specialized systems. Vertebrates all share a basic structure of a central nervous system (CNS) containing a brain and spinal cord connected to a peripheral nervous system (PNS) made up of peripheral sensory and motor nerves.
                    </Typography>
                </Grid>
            </Grid>

            {/* figure for human brain */}
            <Grid item xs={12} >
                <Image src={picBrain} height="75%" width="75%" />
            </Grid>

            {/* figure for mouse brain */}



        </Stack>


    )
}

export default ScreenBrain;