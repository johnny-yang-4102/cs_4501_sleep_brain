import {Stack} from "@mui/system";
import {Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Link} from '@mui/material';

//Need to import all of your pictures before using


const References = () => {
    const padding = {
        padding: 10
    }

    return (
        <Stack spacing={4} direction={"column"} justifyContent={"center"} alignItems={"stretch"} marginLeft={30}
               marginRight={30}>
            <List>
                <ListItem><Link className={"listLink"}
                                href="https://neurosciencenews.com/sleep-deprivation-genetics-10638/" underline="hover"
                                color={"black"}>How Sleep Deprivation Affects Our Genes
                </Link><span className={"listDesc"}> - lower baseline DNA repair gene expression and more DNA breaks with one night of sleep deprivation in humans </span></ListItem>
            </List>
        </Stack>
    );

}


export default References;
