/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <React.Fragment>
        <title key="title">VisualAid</title>,
        <meta name="title" content="VisualAid" />,
        <meta name="description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />,
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://visualaid.sg" />,
        <meta property="og:title" content="VisualAid" />,
        <meta property="og:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />,
        <meta property="og:image" content="https://visualaid.sg/opengraph_image.png" />,
        <meta property="twitter:card" content="opengraph_image.png" />,
        <meta property="twitter:url" content="https://visualaid.sg" />,
        <meta property="twitter:title" content="VisualAid" />,
        <meta property="twitter:description" content="Visual aids to enable better communication between healthcare workers & migrant workers affected by COVID-19." />,
        <meta property="twitter:image" content="https://visualaid.sg/opengraph_image.png" />,
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165278484-1"></script>
        
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}gtag('js', new Date());
    
            gtag('config', 'UA-165278484-1');
        </script>
    
        </React.Fragment>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/plugins.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>
            
        </React.Fragment>
    ]);

};
