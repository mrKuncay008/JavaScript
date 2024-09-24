import React from "react";

export const FooterComp = (InnerComponent) => {
    
    class WrapperComp extends React.Component {
        render() {
            return(
                <div className="p-4">
                    <InnerComponent {...this.props}/>
                </div>
            )           
        }
    }
    return WrapperComp;
}