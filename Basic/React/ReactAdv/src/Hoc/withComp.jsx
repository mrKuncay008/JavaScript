import React from "react";

export const AlertComp = (InnerComponent) => {
    
    class WrapperComp extends React.Component {
        componentDidMount() {
            console.log('Donee');
        }
        render() {
            return <InnerComponent {...this.props}/>
        }
    }

    return WrapperComp;
}