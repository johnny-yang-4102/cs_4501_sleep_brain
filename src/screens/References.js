import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from '@mui/material';
import React from "react";

//Need to import all of your pictures before using


const References = () => {

    return (
        <Stack spacing={4} direction={"column"} justifyContent={"center"} alignItems={"stretch"} marginLeft={30}
               marginRight={30}>
            <Typography variant="h4" align="center">References</Typography>
            <List>
                <ListItem><Link className={"listLink"}
                                href="https://neurosciencenews.com/sleep-deprivation-genetics-10638/" underline="hover"
                                color={"black"} target={"_blank"}>How Sleep Deprivation Affects Our Genes
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>
                <ListItem><Link className={"listLink"}
                                href="https://www.cell.com/molecular-cell/fulltext/S1097-2765(21)00933-3?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS1097276521009333%3Fshowall%3Dtrue"
                                underline="hover"
                                color={"black"} target={"_blank"}> Parp1 promotes sleep, which enhances DNA repair in
                    neurons
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>
                <ListItem><Link className={"listLink"}
                                href="https://www.bbc.com/news/science-environment-39126993" underline="hover"
                                color={"black"} target={"_blank"}>Mysteries of elephant sleep revealed
                </Link><span className={"listDesc"}> - Larger animals tend to sleep less </span></ListItem>
                <ListItem><Link className={"listLink"}
                                href="https://www.google.com/url?q=https://www.ncbi.nlm.nih.gov/books/NBK482512/&sa=D&source=docs&ust=1670005393028835&usg=AOvVaw1bzMA6dgfto1W1tJxN8Mm-"
                                underline="hover"
                                color={"black"} target={"_blank"}> Physiology of Sleep
                </Link><span className={"listDesc"}> - the stages of sleep </span></ListItem>
                <ListItem><Link className={"listLink"}
                                href="https://healthysleep.med.harvard.edu/healthy/matters/benefits-of-sleep/why-do-we-sleep"
                                underline="hover"
                                color={"black"} target={"_blank"}>Why Do We Sleep, Anyway?
                </Link><span className={"listDesc"}> - the evolutionary pressures for sleep</span></ListItem>

                <ListItem><Link className={"listLink"}
                                href="https://www.youtube.com/watch?v=nm1TxQj9IsQ" underline="hover"
                                color={"black"} target={"_blank"}> Master Your Sleep & Be More Alert When Awake

                </Link><span className={"listDesc"}> - how melatonin and adenosine work in tandem to drive sleep </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.youtube.com/watch?v=xxwTWYDnALI" underline="hover"
                    color={"black"}>DW sleep documentary
                </Link><span className={"listDesc"}> - Circadian Rhythm and sleep </span></ListItem>

                <ListItem><Link className={"listLink"}
                                href="https://www.sleepfoundation.org/how-sleep-works/adenosine-and-sleep"
                                underline="hover"
                                color={"black"} target={"_blank"}>Adenosine and Sleep
                </Link><span className={"listDesc"}> - Adenosine is a byproduct of ATP consumption </span></ListItem>


                <ListItem><Link className={"listLink"}
                                href="https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod2/04.html" underline="hover"
                                color={"black"} target={"_blank"}> Training Nurses on Shift Work
                </Link><span className={"listDesc"}> - the consequences of not getting enough sleep </span></ListItem>


                <ListItem><Link className={"listLink"}
                                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2981377/" underline="hover"
                                color={"black"} target={"_blank"}>Molecular and Anatomical Signatures of Sleep Deprivation in the Mouse Brain
                </Link><span className={"listDesc"}> - finds changes in gene expression with sleep deprivation </span></ListItem>


                <ListItem><Link className={"listLink"}
                                href="https://www.science.org/content/article/sleep-ultimate-brainwasher" underline="hover"
                                color={"black"} target={"_blank"}>Sleep: The Ultimate Brainwasher?
                </Link><span className={"listDesc"}> - shows the role of sleep in clearing out proteins</span></ListItem>
        </List>

        <Typography variant="h5" align="center">Brain Research</Typography>
        <List>



                {/* Brain References */}
                <ListItem><Link className={"listLink"}
                    href="hopkinsmedicine.org/health/conditions-and-diseases/anatomy-of-the-brain#:~:text=The%20brain%20is%20a%20complex,central%20nervous%20system%2C%20or%20CNS" underline="hover"
                    color={"black"}>Brain Anatomy and How the Brain Works
                </Link><span className={"listDesc"}> - General information regarding the brain structure and applications </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.google.com/url?q=https://www.karger.com/Article/Fulltext/437413&sa=D&source=docs&ust=1670382879196997&usg=AOvVaw2DpecJ1FhtIMA6E_PCRxDn" underline="hover"
                    color={"black"}>Mammalian Brains Are Made of These: A Dataset of the Numbers and Densities of Neuronal and Nonneuronal Cells in the Brain of Glires, Primates, Scandentia, Eulipotyphlans, Afrotherians and Artiodactyls, and Their Relationship with Body Mass
                </Link><span className={"listDesc"}> - Paper demonstrating relationship of different quantities (mass, volume, etc) in relation to neurons in mammals </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://mindmatters.ai/2020/09/lemurs-with-brains-1-200-the-size-of-chimps-pass-same-iq-test/" underline="hover"
                    color={"black"}>
                    Lemurs With Brains 1/200 The Size Of Chimps' Pass Same IQ Test
                </Link><span className={"listDesc"}> - Size of brain may not be correlation to certain intelligence </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427545/" underline="hover"
                    color={"black"}>
                    The brain's connective core and its role in animal cognition
                </Link><span className={"listDesc"}> - Different models for representing the brain (learning machine, AI, etc) </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://byjus.com/biology/difference-between-human-brain-and-animal-brain/" underline="hover"
                    color={"black"}>
                    Difference Between Human and Animal Brain
                </Link><span className={"listDesc"}> - Random brain facts </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://ecampusontario.pressbooks.pub/animalphysiology/chapter/8-2/" underline="hover"
                    color={"black"}>
                    Brain evolution
                </Link><span className={"listDesc"}> - Different nervous systems and brain structures  </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5452017/" underline="hover"
                    color={"black"}>
                    Brain metabolism in health, aging, and neurodegeneration
                </Link><span className={"listDesc"}> - Research findings on variables affecting brain function  </span></ListItem>




                <ListItem><Link className={"listLink"}
                    href="https://ecampusontario.pressbooks.pub/animalphysiology/chapter/8-2/" underline="hover"
                    color={"black"}>
                    Picture reference 
                </Link><span className={"listDesc"}> - Brain section (nervous system diagram) </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.verywellhealth.com/what-are-glial-cells-and-what-do-they-do-4159734" underline="hover"
                    color={"black"}>
                    Picture reference 
                </Link><span className={"listDesc"}> - Brain section (Glial Cells) </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="http://zoefact.com/assign/science/biology/nervous-tissue.html" underline="hover"
                    color={"black"}>
                    Picture reference 
                </Link><span className={"listDesc"}> - Brain section (neuron structure)  </span></ListItem>

                <ListItem><Link className={"listLink"}
                    href="https://www.quantamagazine.org/how-humans-evolved-supersize-brains-20151110/" underline="hover"
                    color={"black"}>
                    Picture reference 
                </Link><span className={"listDesc"}> - Brain section (chart of animal brains)  </span></ListItem>

            </List>
        </Stack>
    );

}


export default References;
