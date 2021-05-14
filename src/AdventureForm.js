import React from 'react';
//import RGF from 'react-google-forms';

class AdventureForm extends React.Component{

    render(){
        return(
            <iframe title = "form" src={process.env.REACT_APP_FORMS_URL}
            width="100%" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        );
    }
}

export default AdventureForm;