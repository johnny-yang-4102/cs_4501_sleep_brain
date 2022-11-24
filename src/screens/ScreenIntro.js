import { Stack } from "@mui/system";
import { Grid, Typography, ImageList, ImageListItem } from "@mui/material";

import Image from "mui-image";

//Need to import all of your pictures before using
import picBrain from '../images/brain.png'
import picGlial from '../images/glial.webp'
import picNeuron from '../images/neuron-structure.jpeg'


const ScreenIntro = () => {



    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center" marginLeft={15} marginRight={15}>

            <Grid item>
                <Typography variant="h3" > Sleep </Typography>
            </Grid>

            {/* Example section 1 */}
            <Grid item>
                <Typography variant="h4" > Why we sleep </Typography>
            </Grid>

            <Grid container direction="row" >
                <Grid item xs={8}>
                    <Typography variant="h5"> Sleep is dangerous </Typography>
                    <Typography variant="body1" > We spend a third of our life asleep. This is time that could be spent
                        reproducing, gathering food or gaining resources. Instead, we lie dormant, vulnerable to predators.
                        <br />
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
                    <Typography variant="h5" > Inactivity Theory </Typography>
                    <Typography variant="body1" >The idea that animals that remained inactive at night were less
                        likely to get injured, leading to better survival odds.
</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" > Energy Conservation Theory </Typography>
                    <Typography variant="body1" > Our metabolism decreases by up to 10% during sleep.
                        This theory suggests that since searching for food is less efficient at night, we sleep instead.
 </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" > Restoration Theory </Typography>
                    <Typography variant="body1" > Many restorative functions in the body kick in primarily during sleep,
                        like muscle growth, tissue repair protein synthesis and hormone release. The brain also builds
                        up adenosine, a by-product of cell activity, during the day. This is cleared away during sleep.
 </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" > Brain Plasticity Theory</Typography>
                    <Typography variant="body1" > Recent research findings suggest that the brain is actually very
                        active during sleep. During sleep, the brain processes the day's information and filters
                        what is important into long term memory. Metabolic waste in the brain is also cleaned out
                        at a greater rate than during the day.
                        Our project will hone in on this theory.
                        We will be looking specifically at studies on what goes on inside the brains of mice during sleep.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item>
                <Typography variant="h3" > The Brain</Typography>
            </Grid>

            {/* Example section 3 */}

            <Grid container direction="row" >


                {/* Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" > What is the Function of the Brain?</Typography>
                </Grid>

                <Grid container direction="column" xs={6} >
                    <Grid item >
                        <Typography variant="body1" >The brain is a massive parallel, distributed control system that attempts to maintain certain metabolic variables within acceptable bounds in the body while fulfilling a procreative mission. More concretely, brains maintain homeostasis, motivation, learning and memory, and sleep. The brain also needs to do this while responding to a variety of unpredictable circumstances internal and external to the body!
                        </Typography>
                    </Grid>


                    <Grid item >
                        <Typography variant="body1" >In the animal kingdom, different types of organisms have varying nervous systems to house their brain. Invertebrates tend to contain distributed systems (i.e octopi with 9 brains, jelly fishes with “nerve nets”) while vertebrates yield more centralized and specialized systems. Vertebrates all share a basic structure of a central nervous system (CNS) containing a brain and spinal cord connected to a peripheral nervous system (PNS) made up of peripheral sensory and motor nerves.
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item xs={6} >
                    <Image src={picBrain} height="100%" width="50%" />
                </Grid>
            </Grid>



            <Grid container direction="row" >

                {/* Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" > The General Structure of the Brain</Typography>
                </Grid>

                <Grid item xs={6} >
                    <ImageList sx={{ width: 500, height: 164 }} cols={2} rowHeight={164}>
                        <ImageListItem>
                            <img src={picGlial} alt="glial cells" />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={picNeuron} alt="neuron structure"/>
                        </ImageListItem>



                    </ImageList>
                </Grid>

                <Grid container direction="column" xs={6} >
                    <Grid item >
                        <Typography variant="body1" >Brains contain two broad classes of cells: neurons, information transmitters, across connections called synapses. There are also glial cells, non-neuronal cells which provide physical and metabolic support to neurons.
                        </Typography>
                    </Grid>


                </Grid>

            </Grid>

            <Grid container direction="row" >

                {/* Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" > Varying Different Parameters of Brain</Typography>
                </Grid>

                <Grid>

                </Grid>

                <Grid item xs={6} >
                <Typography variant="h5" > Total Weight of Brain</Typography>
                </Grid>

                <Grid item xs={6} >
                <Typography variant="h5" > Structure Sizes within Brain</Typography>
                </Grid>



            </Grid>




        </Stack>
    );
}


export default ScreenIntro;