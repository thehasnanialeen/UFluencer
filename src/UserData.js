import { Component } from "react";
import Header from './Header.js';
import Footer from './Footer.js';

class UserData extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType: '',
            typeOfBusiness: '',
            goals: [],
            headQuarters: {
                city: '',
                province: '',
                postalCode: '',
            },
            numberLocations: '',
            locationPostalCodes: [],
            targetComunity: [],
            targetAgeRange: {
                min: '',
                max: '',
            },
            targetGender: [],
            ethnicity: []
        }
    }

    render(){
        return(
            <div>
                <Header/>
    
                <div className="container">
                    <h2 className="my-4">Let's get you started!</h2>
                    <form>
                        <div className="row">
                            <span className="col-2">Who are you?</span>
                            <div className="col-2">
                                <input className="form-check-input mx-2" type="radio" name="typeOfBusiness" id="business" value="business" checked={this.state.userType === "business"}/>
                                <label className="form-check-label" for="business">Business</label>
                            </div>
                            <div className="col-2">
                                <input className="form-check-input mx-2" type="radio" name="typeOfBusiness" id="influencer" value="influencer" checked={this.state.userType === "influencer"}/>
                                <label className="form-check-label" for="influencer">Influencer</label>
                            </div>
                        </div>

                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </form>
                    


                </div>
                <Footer/>
            </div>
        );
    }
    
}

export default UserData;