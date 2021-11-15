import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

export class SearchFieldsData {

    public getSearchOptions(){

        const searchfieldsData = {
            searchByList: [
                {id:'id', value:'Employee ID'},
                {id:'name', value:'Name'},
                {id:'dob', value:'DOB'},
                {id:'position', value:'Position'},
                {id:'department', value:'Department'},
                {id:'joiningDate', value:'Joining Date'},
                {id:'experience', value:'Experience'}
            ],
    
            searchByoptions: {
                id: {
                    fieldKey: 'id',
                    placeholder: 'Enter Employee ID',
                    inputType: 'text'
                },
                name: {
                    fieldKey: 'name',
                    placeholder: 'Enter Employee Name',
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
                position: {
                    fieldKey: 'position',
                    placeholder: 'Choose Position',
                    inputType: 'select',
                    options: [
                        {
                            id:'operator',
                            value: 'Operator'
                        },
                        {
                            id:'cleaner',
                            value: 'Cleaner'
                        },
                        {
                            id:'supervisor',
                            value: 'Supervisor'
                        },
                        {
                            id:'hrManager',
                            value: 'HR Manager'
                        },
                        {
                            id:'finance',
                            value: 'Finance Manager'
                        },
                        {
                            id:'floormanager',
                            value: 'Floor Manager'
                        },
                        {
                            id:'generalManager',
                            value: 'General Manager'
                        },
                        {
                            id:'boardMember',
                            value: 'Board Member'
                        },
                        {
                            id:'ceo',
                            value: 'CEO'
                        }
                    ]   
                },
                department: {
                    fieldKey: 'department',
                    placeholder: 'Choose Department',
                    inputType: 'select',
                    options: [
                        {
                            id:'produciton',
                            value: 'Production'
                        },
                        {
                            id:'hr',
                            value: 'HR'
                        },
                        {
                            id:'finance',
                            value: 'Finance'
                        },
                        {
                            id:'management',
                            value: 'Management'
                        }
                    ]   
                },
                joiningDate: {
                    fieldKey: 'joiningDate',
                    placeholder: {
                        start: 'Start Date',
                        end: 'End Date'
                    },
                    inputType: 'date'   
                },
                experience: {
                    fieldKey: 'experience',
                    placeholder: 'Enter Experience',
                    inputType: 'text'   
                },
            }
        }

        return searchfieldsData;
    }

    
}