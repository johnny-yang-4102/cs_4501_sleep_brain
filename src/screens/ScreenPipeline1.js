import React from "react";

const myHTML = `multiqc_report.html`

//https://stackoverflow.com/questions/67854057/how-do-i-make-this-iframe-fit-to-the-page-both-vertically-and-horizontally - code 
const ScreenPipeline1 = () => {
<div dangerouslySetInnerHTML={{__html: myHTML}}/>
}

export default ScreenPipeline1;