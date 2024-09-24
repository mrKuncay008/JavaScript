import { FooterComp } from "../Hoc/footerBg";

const Footerme = (propsFoot) => {
    // Meinisiasi Property dengan childern untuk membuat porps Content
    return (
        <h1 className="my-10 text-2xl text-center">{propsFoot.children}</h1>
    );
}
export default FooterComp(Footerme);