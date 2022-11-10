import { CSSReset } from "./components/CSSReset"

function MyApp({Component, pageProps}) {
    console.log("Oláa")
    return (
        <>
            <CSSReset />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp