import { Typography, Stack, Grid, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";


import Image from "mui-image";
import picFastQC from '../images/research-results-fastqc.png'
import picMultiQC from '../images/research_results_multiqc.png'
import picRMD from '../images/research_results_rmd.png'


const ScreenResearchResults = () => {

    const padding = {
        padding: 10
    }

    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="flex-start" marginLeft={30} marginRight={30}>

            <Grid container direction="row" sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column" alignItems="flex-start" spacing={1} xs={6}>
                    <Grid item>
                        <Typography variant="h4">Overview</Typography>
                    </Grid>

                    <Grid item variant="body1">
                        <Typography>The study we looked at carried out RNA sequencing analysis of initially healthy non-sleep deprived mice that underwent deprived sleep for 3 days. This study provided raw Illumina sequencing files, results of 151 base pair reads that had not been trimmed or aligned to the mouse genome. We utilized trim-galore and STAR algorithms to trim and align the sequences to the known mouse genome. </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">FASTQC Report</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">Once these steps were complete, we narrowed down our dataset to the highest quality reads by running FASTQC. FastQC is a quality control tool for genetic sequencing. The fastQC displays a variety of different metrics to describe the over quality of the sequencing reads. Some metrics describe the Phred33 score of basepairs at a given index of the reads, others describe the GC content or the Kmer/adapter content of given reads. Coalescing all of these different metrics allow a bioinformatics specialist to determine if the given reads are valid for the analysis. </Typography>
                    </Grid>

                    <Grid item>
                        <a style={padding} rel="noreferrer" target="_blank" href="SRR10139762_2_val_2_fastqc.html">FastQC Report</a>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">MULTIQC Report</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">MultiQC is a software tool that provides all of the metrics on the same figures allowing quality control analysis of larger datasets to be more human readable. For our dataset we narrowed down the original 45 reads to the twelve highest quality reads. These reads were 6 healthy and 6 deprived samples from the cortex of the mice. To calculate the gene expressions for given samples we used RSEM (gene expression count software) which outputs the counts of all the mouse genes for all files into tab separated files which can be processed, and analyzed in R using DESeq2 (gene expression calculating software). All of this data analysis pipeline were completed on Rivanna using slurm scripts</Typography>
                    </Grid>

                    <Grid item>
                        <a style={padding} rel="noreferrer" target="_blank" href="multiqc_report.html">MultiQC Report</a>
                    </Grid>

                    <Grid item>
                        <a style={padding} rel="noreferrer" target="_blank" href="https://drive.google.com/drive/folders/1PJowrzNyAvb2WSENZRIEexMwTxAdNd-r?usp=sharing">Slurm Scripts (Google drive link)</a>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">PCA Analysis Report</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1">To complete the gene expression, analysis in R PCA analysis and plot, clustered hierarchical dendrogram, gene differential plots, and heatmap were created. All of these graphics showed a significant difference in gene expression between the health and deprived sleep states of the mice. All of the R analysis is within the following RMD file which shows the up-regulated and down-regulated brain genes in the mice during this study.</Typography>
                    </Grid>

                    <Grid item>
                        <a style={padding} rel="noreferrer" target="_blank" href="CB.html">PCA Analysis Report</a>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">Top 25 Highly Expressed Genes</Typography>
                    </Grid>

                    <Grid item>
                        <ol>
                            <li>ENSMUSG00000000001.5_Gnai3</li>
                            <li>ENSMUSG00000000028.16_Cdc45</li>
                            <li>ENSMUSG00000000031.18_H19</li>
                            <li>ENSMUSG00000000078.8_Klf6</li>
                            <li>ENSMUSG00000000085.17_Scmh1</li>
                            <li>ENSMUSG00000000088.8_Cox5a</li>
                            <li>ENSMUSG00000000126.12_Wnt9a</li>
                            <li>ENSMUSG00000000127.16_Fer</li>
                            <li>ENSMUSG00000000131.16_Xpo6</li>
                            <li>ENSMUSG00000000134.18_Tfe3</li>
                            <li>ENSMUSG00000000142.16_Axin2</li>
                            <li>ENSMUSG00000000149.11_Gna12</li>
                            <li>ENSMUSG00000000168.11_Dlat</li>
                            <li>ENSMUSG00000000171.6_Sdhd</li>
                            <li>ENSMUSG00000000184.13_Ccnd2</li>
                            <li>ENSMUSG00000000197.9_Nalcn</li>
                            <li>ENSMUSG00000000202.10_Btbd17</li>
                            <li>ENSMUSG00000000223.14_Drp2</li>
                            <li>ENSMUSG00000000244.18_Tspan32</li>
                            <li>ENSMUSG00000000247.12_Lhx2</li>
                            <li>ENSMUSG00000000253.14_Gmpr</li>
                            <li>ENSMUSG00000000266.12_Mid2</li>
                            <li>ENSMUSG00000000275.17_Trim25</li>
                            <li>ENSMUSG00000000276.12_Dgke</li>
                            <li>ENSMUSG00000000282.13_Mnt</li>
                        </ol>

                    </Grid>

                </Grid>


                {/* PICTURE SECTION  */}
                <Grid container direction="row" xs={6}>

                    <ImageList sx={{ width: "100%", height: "90%" }} cols={1}>
                    
                        <ImageListItem>
                            <Image src={picFastQC} fit="fill" />
                            <ImageListItemBar title="FASTQC Report Preview (click link)"/>
                        </ImageListItem>

                        <ImageListItem>
                            <Image src={[picMultiQC]} fit="fill" />
                            <ImageListItemBar title="MULTIQC Report Preview (click link)"/>
                        </ImageListItem>

                        <ImageListItem>
                            <Image src={picRMD} fit="fill" />
                            <ImageListItemBar title="PCA Analysis Report Preview (click link)"/>
                        </ImageListItem>


                    </ImageList>

                </Grid>


            </Grid>


        </Stack >
    )
}

export default ScreenResearchResults;