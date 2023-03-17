import { Component } from "react";
import Header from './Header.js';
import Footer from './Footer.js';

class UserData extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType: '',
            business: {
                typeOfBusiness: [
                    {type: "E-Commerce", checked: false},
                    {type: "Retail", checked: false},
                    {type: "Restaurant", checked: false},
                    {type: "Others", checked: false},
                ],
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
                locationPostalCodes: '',
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
            result: []
        }
    }

    handleTypeBussinessChange(id){
        let business = this.state.business;
        business.typeOfBusiness[id].checked = !business.typeOfBusiness[id].checked;
        this.setState({business: business});
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
        this.setState({submitted: true});
        console.log("Hello");
        class Influencer {
            constructor(name, location, businessType, engagement, targetCommunity, targetAge, targetGender, targetEthnicity, price, prefferedPlatforms) {
                this.name = name;
                this.location = location;
                this.businessType = businessType;
                this.engagement = engagement;
                this.targetCommunity = targetCommunity;
                this.targetAge = targetAge;
                this.targetGender = targetGender;
                this.targetEthnicity = targetEthnicity;
                this.price = price;
                this.prefferedPlatforms = prefferedPlatforms;
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
            new Influencer("John Wish", "Regina", "Ecommerce", 5000, "Colleges", 25, "Male", "Asian"),
            new Influencer("Rachel Green", "Saskatoon", "Retail", 3000, "Residential", 30, "Female", "American"),
            new Influencer("Jack Ryan", "Prince Albert", "Restaurant", 10000, "Residential", 35, "Male", "Asian"),
            new Influencer("James Greer", "Calgary", "Ecommerce", 8000, "Residential", 28, "Male", "American"),
            new Influencer("Jasmine Kaur", "Regina", "Retail", 2000, "Others", 25, "Female", "African")
        ];
        
        const businessHeadquarters = this.state.business.headQuarters;
        const businessLocations = this.state.business.locationPostalCodes;
        
        const influencersByLocation = filterByLocation(influencers, businessHeadquarters, businessLocations);
        
        const businessType = this.state.business.typeOfBusiness[0].type;
        const influencersByBusinessType = filterByBusinessType(influencersByLocation, businessType);
        
        influencersByBusinessType.sort(sortByEngagement);
        
        const targetCommunity = this.state.business.targetCommunity[0].community;
        const targetAge = (this.state.business.targetAgeRange.min + this.state.business.targetAgeRange.min)/2;
        const targetGender = this.state.business.targetGender[0].gender;
        const targetEthnicity = this.state.business.targetEthnicity[0].ethnicity;
        
        const shortlistedInfluencers = createShortlist(influencersByBusinessType, targetCommunity, targetAge, targetGender, targetEthnicity);

        console.log("Shortlist of influencers:");
        this.setState({result: shortlistedInfluencers});
        shortlistedInfluencers.forEach(influencer => console.log(influencer.name));
                
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
                                <span>Type of Business:</span>
                                {this.state.business.typeOfBusiness.map(({type, checked}, index) => (
                                    <div className="ms-3">
                                        <input
                                            type="checkbox"
                                            id={index}
                                            name={type}
                                            value={type}
                                            checked={checked}
                                            onChange={() => this.handleTypeBussinessChange(index)}
                                            className="me-2"
                                        />
                                        <label>{type}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5">
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

                            <div className="row mt-5">
                                <label className="form-label col-3 align-middle">Head Quarters Address: </label>
                                <input type="text" className="mx-2 col-2" value={this.state.business.headQuarters.city} placeholder="City" onChange={(e) => {let data = this.state.business; data.headQuarters.city = e.target.value; this.setState({business: data})}}/>
                                <input type="text" className="mx-2 col-3" value={this.state.business.headQuarters.province} placeholder="Province" onChange={(e) => {let data = this.state.business; data.headQuarters.province = e.target.value; this.setState({business: data})}}/>
                                <input type="text" className="mx-2 col-2" value={this.state.business.headQuarters.postalCode} placeholder="Postal Code" onChange={(e) => {let data = this.state.business; data.headQuarters.postalCode = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="row mt-5">
                                <label className="form-label col-3 align-middle">Number of Locations: </label>
                                <input type="text" className="mx-2 col-3" value={this.state.business.numberLocations} onChange={(e) => {let data = this.state.business; data.numberLocations = e.target.value; this.setState({business: data})}}/>
                            </div>

                            <div className="row mt-5">
                                <label className="form-label col-3 align-middle">Locations Postal Code: </label>
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
                                
                            <div className="row my-5">
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
                                <button className="p-2 me-5 submitButton" onClick={() => this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                        ) : (
                        <div>
                            
                        </div>
                        )}
                    </form>
                </div>) : (
                    <div className="container">
                        <div className="col-3"></div>
                        {this.state.result.map((influencer) => (

                        <div className="techuserques col-6">
                            <span><i class="bi bi-person-circle"></i>{influencer.name}</span>
                       
                            <div className="userdetails">
                                <span> Location: {influencer.location} </span>
                                <span> Optimized score: {influencer.age/40*100}/100 </span>
                                <span> Social media health: {influencer.age/60*100}/100 </span>
                                <span> Preffered platform: {influencer.prefferedPlatforms} </span>
                                <p> Has a following of {influencer.engagement} on {influencer.prefferedPlatforms}</p>
                                <span> Past industry impact score: {influencer.businessType} - {influencer.age/40*100}/100 </span>
                            
                                <span> Community type: {influencer.targetCommunity}         </span>
                                <span> Pricing: ${influencer.price}/ 500 CPA </span>
                            </div>
                        </div>
                    ))}
                    </div>
                )}
                <Footer/>
            </div>
        );
    }
    
}

export default UserData;
