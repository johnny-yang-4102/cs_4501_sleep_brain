import { Typography } from "@mui/material";

const ScreenResearchResults = () => {

    const padding = {
        padding: 10
      }

    return (
        <div>
            <Typography>Paragraph explaining multiqc report here</Typography>
            <a style={padding} target="_blank" href="multiqc_report.html">MultiQC Report</a>

            <Typography>Paragraph explaining fastqc report here</Typography>
            <a style={padding} target="_blank" href="SRR10139762_2_val_2_fastqc.html">FastQC Report</a>
        </div>
    )
}

export default ScreenResearchResults;