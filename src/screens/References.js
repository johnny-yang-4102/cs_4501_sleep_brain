import {Stack} from "@mui/system";
import {Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Link} from '@mui/material';
import React from "react";

//Need to import all of your pictures before using


const References = () => {
    const padding = {
        padding: 10
    }

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
                                href="https://neurosciencenews.com/sleep-deprivation-genetics-10638/" underline="hover"
                                color={"black"} target={"_blank"}>How Sleep Deprivation Affects Our Genes
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>


                <ListItem><Link className={"listLink"}
                                href="https://neurosciencenews.com/sleep-deprivation-genetics-10638/" underline="hover"
                                color={"black"} target={"_blank"}>How Sleep Deprivation Affects Our Genes
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>


                <ListItem><Link className={"listLink"}
                                href="https://neurosciencenews.com/sleep-deprivation-genetics-10638/" underline="hover"
                                color={"black"} target={"_blank"}>How Sleep Deprivation Affects Our Genes
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>
            </List>
        </Stack>
    );

}


export default References;
