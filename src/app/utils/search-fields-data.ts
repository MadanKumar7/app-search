import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

export class SearchFieldsData {

    public getSearchOptions(){

        const searchfieldsData = {
            searchByList: [
                {id:'id', value:'Employee ID'},
                {id:'firstName', value:'First Name'},
                {id:'lastName', value:'Last Name'},
                {id:'dob', value:'DOB'},
                {id:'age', value:'Age'},
                {id:'gender', value:'Gender'},
                {id:'phoneNumber', value:'Phone Number'},
                {id:'email', value:'E-mail'},
                {id:'ssn', value:'SSN'},
                {id:'position', value:'Position'},
                {id:'department', value:'Department'},
                {id:'experience', value:'Experience'},
                {id:'salary', value:'Salary'},
                {id:'policyNumber', value:'Policy Number'},
                {id:'accountNumber', value:'Account Number'},
                {id:'bankName', value:'Bank Name'},
                {id:'state', value:'State'},
                {id:'maritialStatus', value:'Maritial Status'}
            ],
    
            searchByoptions: {
                id: {
                    fieldKey: 'id',
                    placeholder: 'Enter Employee ID',
                    inputType: 'text'
                },
                firstName: {
                    fieldKey: 'firstName',
                    placeholder: 'Enter First Name',
                    inputType: 'text'   
                },
                lastName: {
                    fieldKey: 'lastName',
                    placeholder: 'Enter Last Name',
                    inputType: 'text'   
                },
                dob: {
                    fieldKey: 'dob',
                    placeholder: {
                        start: 'Start Date',
                        end: 'End Date'
                    },
                    inputType: 'date'   
                },
                age: {
                    fieldKey: 'age',
                    placeholder: 'Enter Age',
                    inputType: 'text'   
                },
                gender: {
                    fieldKey: 'gender',
                    placeholder: 'Choose Gender',
                    inputType: 'select',
                    options: [
                        
                        {
                            "id": "female",
                            "value": "Female"
                        },
                        {
                            "id": "male",
                            "value": "Male"
                        },
                    ]
                },
                phoneNumber: {
                    fieldKey: 'phoneNumber',
                    placeholder: '000-0000-00',
                    inputType: 'text'   
                },
                email: {
                    fieldKey: 'email',
                    placeholder: 'Enter E-mail',
                    inputType: 'text'   
                },
                ssn: {
                    fieldKey: 'ssn',
                    placeholder: '000-0000-00',
                    inputType: 'text'   
                },
                position: {
                    fieldKey: 'position',
                    placeholder: 'Choose Position',
                    inputType: 'select',
                    options: [
                        
                        {
                            "id": "supervisor",
                            "value": "Supervisor"
                        },
                        {
                            "id": "associate",
                            "value": "Associate"
                        },
                        {
                            "id": "executive",
                            "value": "Executive"
                        },
                        {
                            "id": "liason",
                            "value": "Liason"
                        },
                        {
                            "id": "officer",
                            "value": "Officer"
                        },
                        {
                            "id": "manager",
                            "value": "Manager"
                        },
                        {
                            "id": "engineer",
                            "value": "Engineer"
                        },
                        {
                            "id": "specialist",
                            "value": "Specialist"
                        },
                        {
                            "id": "director",
                            "value": "Director"
                        },
                        {
                            "id": "coordinator",
                            "value": "Coordinator"
                        },
                        {
                            "id": "administrator",
                            "value": "Administrator"
                        },
                        {
                            "id": "architect",
                            "value": "Architect"
                        },
                        {
                            "id": "analyst",
                            "value": "Analyst"
                        },
                        {
                            "id": "designer",
                            "value": "Designer"
                        },
                        {
                            "id": "planner",
                            "value": "Planner"
                        },
                        {
                            "id": "orchestrator",
                            "value": "Orchestrator"
                        },
                        {
                            "id": "technician",
                            "value": "Technician"
                        },
                        {
                            "id": "developer",
                            "value": "Developer"
                        },
                        {
                            "id": "producer",
                            "value": "Producer"
                        },
                        {
                            "id": "consultant",
                            "value": "Consultant"
                        },
                        {
                            "id": "assistant",
                            "value": "Assistant"
                        },
                        {
                            "id": "facilitator",
                            "value": "Facilitator"
                        },
                        {
                            "id": "agent",
                            "value": "Agent"
                        },
                        {
                            "id": "representative",
                            "value": "Representative"
                        },
                        {
                            "id": "strategist",
                            "value": "Strategist"
                        },
                        {
                            "id": "supervisor",
                            "value": "Supervisor"
                        },
                        {
                            "id": "vicePresident",
                            "value": "Vice President"
                        },
                        {
                            "id": "vp",
                            "value": "VP"
                        }
                    ]
                },
                department: {
                    fieldKey: 'department',
                    placeholder: 'Choose Department',
                    inputType: 'select',
                    options: [
                        {
                            "id": "solutions",
                            "value": "Solutions"
                        },
                        {
                            "id": "program",
                            "value": "Program"
                        },
                        {
                            "id": "brand",
                            "value": "Brand"
                        },
                        {
                            "id": "security",
                            "value": "Security"
                        },
                        {
                            "id": "research",
                            "value": "Research"
                        },
                        {
                            "id": "marketing",
                            "value": "Marketing"
                        },
                        {
                            "id": "directives",
                            "value": "Directives"
                        },
                        {
                            "id": "implementation",
                            "value": "Implementation"
                        },
                        {
                            "id": "integration",
                            "value": "Integration"
                        },
                        {
                            "id": "functionality",
                            "value": "Functionality"
                        },
                        {
                            "id": "response",
                            "value": "Response"
                        },
                        {
                            "id": "paradigm",
                            "value": "Paradigm"
                        },
                        {
                            "id": "tactics",
                            "value": "Tactics"
                        },
                        {
                            "id": "markets",
                            "value": "Markets"
                        },
                        {
                            "id": "group",
                            "value": "Group"
                        },
                        {
                            "id": "division",
                            "value": "Division"
                        },
                        {
                            "id": "applications",
                            "value": "Applications"
                        },
                        {
                            "id": "optimization",
                            "value": "Optimization"
                        },
                        {
                            "id": "operations",
                            "value": "Operations"
                        },
                        {
                            "id": "communications",
                            "value": "Communications"
                        },
                        {
                            "id": "web",
                            "value": "Web"
                        },
                        {
                            "id": "quality",
                            "value": "Quality"
                        },
                        {
                            "id": "assurance",
                            "value": "Assurance"
                        },
                        {
                            "id": "accounts",
                            "value": "Accounts"
                        },
                        {
                            "id": "creative",
                            "value": "Creative"
                        },
                        {
                            "id": "accountability",
                            "value": "Accountability"
                        },
                        {
                            "id": "interactions",
                            "value": "Interactions"
                        },
                        {
                            "id": "factors",
                            "value": "Factors"
                        },
                        {
                            "id": "usability",
                            "value": "Usability"
                        },
                        {
                            "id": "metrics",
                            "value": "Metrics"
                        }
                    ]   
                },
                experience: {
                    fieldKey: 'experience',
                    placeholder: 'Enter Experience',
                    inputType: 'text'   
                },
                salary: {
                    fieldKey: 'salary',
                    placeholder: 'Enter Salary',
                    inputType: 'text'   
                },
                policyNumber: {
                    fieldKey: 'policyNumber',
                    placeholder: 'Enter Policy Number',
                    inputType: 'text'   
                },
                accountNumber: {
                    fieldKey: 'accountNumber',
                    placeholder: 'Enter Account Number',
                    inputType: 'text'   
                },
                bankName: {
                    fieldKey: 'bankName',
                    placeholder: 'Choose Bank',
                    inputType: 'select',
                    options: [
                        {
                            "id": "gradeEagle",
                            "value": "Grade Eagle"
                        },
                        {
                            "id": "newCoast",
                            "value": "New Coast"
                        },
                        {
                            "id": "secureBancShares",
                            "value": "Secure BancShares"
                        }
                    ]
                },
                state: {
                    fieldKey: 'state',
                    placeholder: 'Choose State',
                    inputType: 'select',
                    options: [
                        {
                            "id": "ak",
                            "value": "AK"
                        },
                        {
                            "id": "al",
                            "value": "AL"
                        },
                        {
                            "id": "ar",
                            "value": "AR"
                        },
                        {
                            "id": "az",
                            "value": "AZ"
                        },
                        {
                            "id": "ca",
                            "value": "CA"
                        },
                        {
                            "id": "co",
                            "value": "CO"
                        },
                        {
                            "id": "ct",
                            "value": "CT"
                        },
                        {
                            "id": "dc",
                            "value": "DC"
                        },
                        {
                            "id": "de",
                            "value": "DE"
                        },
                        {
                            "id": "fl",
                            "value": "FL"
                        },
                        {
                            "id": "ga",
                            "value": "GA"
                        },
                        {
                            "id": "hi",
                            "value": "HI"
                        },
                        {
                            "id": "ia",
                            "value": "IA"
                        },
                        {
                            "id": "id",
                            "value": "ID"
                        },
                        {
                            "id": "il",
                            "value": "IL"
                        },
                        {
                            "id": "in",
                            "value": "IN"
                        },
                        {
                            "id": "ks",
                            "value": "KS"
                        },
                        {
                            "id": "ky",
                            "value": "KY"
                        },
                        {
                            "id": "la",
                            "value": "LA"
                        },
                        {
                            "id": "ma",
                            "value": "MA"
                        },
                        {
                            "id": "md",
                            "value": "MD"
                        },
                        {
                            "id": "me",
                            "value": "ME"
                        },
                        {
                            "id": "mi",
                            "value": "MI"
                        },
                        {
                            "id": "mn",
                            "value": "MN"
                        },
                        {
                            "id": "mo",
                            "value": "MO"
                        },
                        {
                            "id": "ms",
                            "value": "MS"
                        },
                        {
                            "id": "mt",
                            "value": "MT"
                        },
                        {
                            "id": "nc",
                            "value": "NC"
                        },
                        {
                            "id": "nd",
                            "value": "ND"
                        },
                        {
                            "id": "ne",
                            "value": "NE"
                        },
                        {
                            "id": "nh",
                            "value": "NH"
                        },
                        {
                            "id": "nj",
                            "value": "NJ"
                        },
                        {
                            "id": "nm",
                            "value": "NM"
                        },
                        {
                            "id": "nv",
                            "value": "NV"
                        },
                        {
                            "id": "ny",
                            "value": "NY"
                        },
                        {
                            "id": "oh",
                            "value": "OH"
                        },
                        {
                            "id": "ok",
                            "value": "OK"
                        },
                        {
                            "id": "or",
                            "value": "OR"
                        },
                        {
                            "id": "pa",
                            "value": "PA"
                        },
                        {
                            "id": "pr",
                            "value": "PR"
                        },
                        {
                            "id": "ri",
                            "value": "RI"
                        },
                        {
                            "id": "sc",
                            "value": "SC"
                        },
                        {
                            "id": "sd",
                            "value": "SD"
                        },
                        {
                            "id": "tn",
                            "value": "TN"
                        },
                        {
                            "id": "tx",
                            "value": "TX"
                        },
                        {
                            "id": "ut",
                            "value": "UT"
                        },
                        {
                            "id": "va",
                            "value": "VA"
                        },
                        {
                            "id": "vt",
                            "value": "VT"
                        },
                        {
                            "id": "wa",
                            "value": "WA"
                        },
                        {
                            "id": "wi",
                            "value": "WI"
                        },
                        {
                            "id": "wv",
                            "value": "WV"
                        },
                        {
                            "id": "wy",
                            "value": "WY"
                        }
                
                    ]
                },
                maritialStatus: {
                    fieldKey: 'maritialStatus',
                    placeholder: 'Choose Maritial Status',
                    inputType: 'select',
                    options: [
                        {
                            "id": "married",
                            "value": "Married"
                        },
                        {
                            "id": "single",
                            "value": "Single"
                        }
                    ]
                }
                
            }
        }

        return searchfieldsData;
    }

}