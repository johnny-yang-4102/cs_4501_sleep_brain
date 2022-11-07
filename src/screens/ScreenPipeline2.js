import React from "react";


//https://stackoverflow.com/questions/67854057/how-do-i-make-this-iframe-fit-to-the-page-both-vertically-and-horizontally - code 
const ScreenPipeline2 = () => {

    const iframeRef = React.createRef();
    const [iframeHeight, setIframeHeight] = React.useState('100%');

    React.useEffect(() => {
        setIframeHeight(`${iframeRef.current.contentWindow.document.documentElement.scrollHeight}px`);
    }, []);




    return (
        <iframe
            ref={iframeRef}
            id="widget"
            name="widget"
            title="widget"
            scrolling="yes"
            frameBorder="0"
            width="100%"
            height={iframeHeight}
            src="SRR10139762_2_val_2_fastqc.html"
            style={{height: iframeHeight }}
        ></iframe>
    )
}

export default ScreenPipeline2;