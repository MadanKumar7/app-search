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
                {id:'position', value:'Position'},
                {id:'department', value:'Department'},
                {id:'experience', value:'Experience'},
                {id:'phoneNumber', value:'Phone Number'},
                {id:'salary', value:'Salary'}
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
                phoneNumber: {
                    fieldKey: 'phoneNumber',
                    placeholder: '000-0000-00',
                    inputType: 'text'   
                },
                salary: {
                    fieldKey: 'salary',
                    placeholder: 'Enter Salary',
                    inputType: 'text'   
                },
            }
        }

        return searchfieldsData;
    }

}