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
                numInteractions: '',
            },
            submitted: false,
        }
    }

    handleGoalsChange(id) {
        let business = this.state.business;
        business.goals[id].checked = !business.goals[id].checked;
        this.setState({business: business});
    }

    handlCommunityChange(id) {
        let business = this.state.business;
        business.targetCommunity[id].checked = !business.targetCommunity[id].checked;
        this.setState({business: business});
    }

    handlGenderChange(id) {
        let business = this.state.business;
        business.targetGender[id].checked = !business.targetGender[id].checked;
        this.setState({business: business});
    }

    handlEthnicityChange(id) {
        let business = this.state.business;
        business.targetEthnicity[id].checked = !business.targetEthnicity[id].checked;
        this.setState({business: business});
    }

    handleSubmit(){
        class Influencer {
            constructor(name, location, businessType, engagement, targetCommunity, targetAge, targetGender, targetEthnicity) {
                this.name = name;
                this.location = location;
                this.businessType = businessType;
                this.engagement = engagement;
                this.targetCommunity = targetCommunity;
                this.targetAge = targetAge;
                this.targetGender = targetGender;
                this.targetEthnicity = targetEthnicity;
            }
        }
        
        function filterByLocation(influencers, businessHeadquarters, businessLocations) {
            return influencers.filter(influencer => {
                return influencer.location === businessHeadquarters || businessLocations.includes(influencer.location);
            });
        }
        
        function filterByBusinessType(influencers, businessType) {
            return influencers.filter(influencer => influencer.businessType === businessType);
        }
        
        function sortByEngagement(a, b) {
            return b.engagement - a.engagement;
        }
        
        function createShortlist(influencers, targetCommunity, targetAge, targetGender, targetEthnicity) {
            return influencers.filter(influencer => {
                return influencer.targetCommunity === targetCommunity
                    && influencer.targetAge === targetAge
                    && influencer.targetGender === targetGender
                    && influencer.targetEthnicity === targetEthnicity;
            });
        }
        
        const influencers = [
            new Influencer("Influencer1", "New York", "Ecommerce", 5000, "Tech", 25, "Male", "Caucasian"),
            new Influencer("Influencer2", "Los Angeles", "Retail", 3000, "Fashion", 30, "Female", "Hispanic"),
            new Influencer("Influencer3", "San Francisco", "Restaurant", 10000, "Food", 35, "Male", "Asian"),
            new Influencer("Influencer4", "New York", "Ecommerce", 8000, "Beauty", 28, "Female", "Caucasian"),
            new Influencer("Influencer5", "Los Angeles", "Retail", 2000, "Fashion", 25, "Male", "African American")
        ];
        
        const businessHeadquarters = "New York";
        const businessLocations = ["Los Angeles", "San Francisco"];
        
        const influencersByLocation = filterByLocation(influencers, businessHeadquarters, businessLocations);
        
        const businessType = "Ecommerce";
        const influencersByBusinessType = filterByBusinessType(influencersByLocation, businessType);
        
        influencersByBusinessType.sort(sortByEngagement);
        
        const targetCommunity = "Tech";
        const targetAge = 25;
        const targetGender = "Male";
        const targetEthnicity = "Caucasian";
        
        const shortlistedInfluencers = createShortlist(influencersByBusinessType, targetCommunity, targetAge, targetGender, targetEthnicity);
        
        console.log("Shortlist of influencers:");

        return(
            <div>
                {shortlistedInfluencers.map(({influencer}) => (
                    <p>{influencer.name}</p>
                ))}
            </div>
           
        );
                
    }

    render(){
        return(
            <div>
                <Header/>
    
                {!this.state.submitted ? (<div className="container">
                    <h2 className="my-4">Let's get you started!</h2>
                    <form>
                        <div className="row">
                            <span className="col-2">Who are you?</span>
                            <div className="col-2">
                                <input className="form-check-input mx-2" type="radio" name="typeOfBusiness" id="business" value="business" checked={this.state.userType === "business"} onChange={() => this.setState({userType: "business"})}/>
                                <label className="form-check-label" for="business">Business</label>
                            </div>
                            <div className="col-2">
                                <input className="form-check-input mx-2" type="radio" name="typeOfBusiness" id="influencer" value="influencer" checked={this.state.userType === "influencer"} onChange={() => this.setState({userType: "influencer"})}/>
                                <label className="form-check-label" for="influencer">Influencer</label>
                            </div>
                        </div>

                        {this.state.userType === "business" ? (
                        <div className="shadow container px-5 mt-3 py-4">
                            <div className="mt-1">
                                <span>Goals:</span>
                                {this.state.business.goals.map(({goal, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={goal}
                                            value={goal}
                                            checked={checked}
                                            onChange={() => this.handleGoalsChange(index)}
                                            className="me-2"
                                        />
                                        <label>{goal}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Head Quarters Address: </label>
                                <input type="text" className="mx-2 col-2" value={this.state.business.headQuarters.city} placeholder="City" onChange={(e) => {let data = this.state.business; data.headQuarters.city = e.target.value; this.setState({business: data})}}/>
                                <input type="text" className="mx-2 col-3" value={this.state.business.headQuarters.province} placeholder="Province" onChange={(e) => {let data = this.state.business; data.headQuarters.province = e.target.value; this.setState({business: data})}}/>
                                <input type="text" className="mx-2 col-2" value={this.state.business.headQuarters.postalCode} placeholder="Postal Code" onChange={(e) => {let data = this.state.business; data.headQuarters.postalCode = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Number of Locations: </label>
                                <input type="text" className="mx-2 col-3" value={this.state.business.numberLocations} onChange={(e) => {let data = this.state.business; data.numberLocations = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Locations Postal Codes: </label>
                                <input type="text" className="mx-2 col-3" value={this.state.business.locationPostalCodes} onChange={(e) => {let data = this.state.business; data.locationPostalCodes = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="mt-5">
                                <span>Target Community:</span>
                                {this.state.business.targetCommunity.map(({community, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={community}
                                            value={community}
                                            checked={checked}
                                            onChange={() => this.handlCommunityChange(index)}
                                            className="me-2"
                                        />
                                        <label>{community}</label>
                                    </div>
                                ))}
                            </div>
                                
                            <div className="row my-3">
                                <label className="form-label col-3 align-middle">Target Age: </label>
                                <input type="text" className="col-2" value={this.state.business.targetAgeRange.min} placeholder="min" onChange={(e) => {let data = this.state.business; data.targetAgeRange.min = e.target.value; this.setState({business: data})}}/>
                                <span className="fw-bold col-1 text-center">-</span>
                                <input type="text" className="col-2" value={this.state.business.targetAgeRange.max} placeholder="max" onChange={(e) => {let data = this.state.business; data.targetAgeRange.max = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="mt-5">
                                <span>Target Gender:</span>
                                {this.state.business.targetGender.map(({gender, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={gender}
                                            value={gender}
                                            checked={checked}
                                            onChange={() => this.handlGenderChange(index)}
                                            className="me-2"
                                        />
                                        <label>{gender}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5">
                                <span>Target Ethnicity:</span>
                                {this.state.business.targetEthnicity.map(({ethnicity, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={ethnicity}
                                            value={ethnicity}
                                            checked={checked}
                                            onChange={() => this.handlEthnicityChange(index)}
                                            className="me-2"
                                        />
                                        <label>{ethnicity}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="text-end m-4">
                                <button className="p-2 me-5 submitButton" onSubmit={() => this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                        ) : (
                        <div>

                        </div>
                        )}
                    </form>
                </div>) : (
                    <div className="container">
                        
                    </div>
                )}
                <Footer/>
            </div>
        );
    }
    
}

export default UserData;