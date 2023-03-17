import { Component } from "react";
import Header from './Header.js';
import Footer from './Footer.js';

class UserData extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType: '',
            business: {
                typeOfBusiness: '',
                goals: [
                    {goal: "Sales", checked: false},
                    {goal: "Increase Brand Awareness", checked: false},
                    {goal: "Improve Customer Engagement", checked: false},
                    {goal: "Increase Market Share", checked: false}
                ],
                headQuarters: {
                    city: '',
                    province: '',
                    postalCode: '',
                },
                numberLocations: '',
                locationPostalCodes: [],
                targetCommunity: [
                    {community: "Residential", checked: false},
                    {community: "Colleges", checked: false},
                    {community: "Others", checked: false}
                ],
                targetAgeRange: {
                    min: '',
                    max: '',
                },
                targetGender: [
                    {gender: "Male", checked: false},
                    {gender: "Female", checked: false},
                    {gender: "Others", checked: false}
                ],
                targetEthnicity: [
                    {ethnicity: "American", checked: false},
                    {ethnicity: "Asian", checked: false},
                    {ethnicity: "African", checked: false}
                ]
            },
            influencer: {
                preferredIndustry: [
                    {industry: "Finance", checked: false},
                    {industry: "Manufacture", checked: false},
                    {industry: "Recruiting", checked: false},
                    {industry: "IT", checked: false},
                    {industry: "Retail", checked: false},
                    {industry: "Others", checked: false},
                ],
                location: {
                    streetAddress: "",
                    city: "",
                    province: '',
                    postcalCode: ''
                },
                age: 0,
                gender: "",
                ethnicity: "",
                community: '',
                prefferedProducts: [
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                    {product: "Finance", checked: false},
                ],
                prefferedBrands: [
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                    {brand: "Finance", checked: false},
                ],
                prefferedPlatforms: [
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                    {platform: "Finance", checked: false},
                ],
                numInteractions: ''
            }
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
                            <div className="mt-5">
                                <span>Goals:</span>
                                {this.state.goals.map(({goal, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={goal}
                                            value={goal}
                                            checked={checked}
                                            onChange={() => this.setState({checked: true})}
                                            className="me-2"
                                        />
                                        <label>{goal}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Head Quarters Address: </label>
                                <input type="text" className="mx-2 col-2" value={this.state.headQuarters.city} placeholder="City"/>
                                <input type="text" className="mx-2 col-3" value={this.state.headQuarters.province} placeholder="Province"/>
                                <input type="text" className="mx-2 col-2" value={this.state.headQuarters.postalCode} placeholder="Postal Code"/>
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Number of Locations: </label>
                                <input type="text" className="mx-2 col-3" value={this.state.numberLocations}/>
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Locations Postal Codes: </label>
                                <input type="text" className="mx-2 col-3" value={this.state.locationPostalCodes}/>
                            </div>

                            <div className="mt-5">
                                <span>Target Community:</span>
                                {this.state.targetCommunity.map(({community, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={community}
                                            value={community}
                                            checked={checked}
                                            onChange={() => this.setState({checked: true})}
                                            className="me-2"
                                        />
                                        <label>{community}</label>
                                    </div>
                                ))}
                            </div>
                                
                            <div className="row my-3">
                                <label className="form-label col-2 align-middle">Target Age: </label>
                                <input type="text" className="mx-2 col-2" value={this.state.targetAgeRange.min} placeholder="min"/>
                                <span className="fw-bold col-1 text-center">-</span>
                                <input type="text" className="mx-2 col-2" value={this.state.targetAgeRange.max} placeholder="max"/>
                            </div>

                            <div className="mt-5">
                                <span>Target Gender:</span>
                                {this.state.targetGender.map(({gender, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={gender}
                                            value={gender}
                                            checked={checked}
                                            onChange={() => this.setState({checked: true})}
                                            className="me-2"
                                        />
                                        <label>{gender}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5">
                                <span>Target Ethnicity:</span>
                                {this.state.targetEthnicity.map(({ethnicity, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={ethnicity}
                                            value={ethnicity}
                                            checked={checked}
                                            onChange={() => this.setState({checked: true})}
                                            className="me-2"
                                        />
                                        <label>{ethnicity}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>

                        </div>
                    </form>
                    


                </div>
                <Footer/>
            </div>
        );
    }
    
}

export default UserData;