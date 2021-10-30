import React from "react";
import { useMediaQuery } from "react-responsive";
import "../Components/css/Responsive-web-settings.css";

const DynamicWeb = () => {
    const PCversion = useMediaQuery ({
        query: "(min-width: 1024px) and (max-width: 1920px)"
    })

    const NotebookOrTabltVersion = useMediaQuery ({
        query: "(min-width: 965px) and (max-width: 1020px)"
    })

    const MobileVersion = useMediaQuery ({
        query: "(min-width: 280px) and (max-width: 375px)"
    });

    return (
        <div id="rootWrap">
            <div className="PC">
                <PCversion />
            </div>

            <div className="NotebookOrTablt">
                <NotebookOrTabltVersion />
            </div>

            <div className="Mobile">
                <MobileVersion />
            </div>
        </div>
    );
}

export default DynamicWeb;