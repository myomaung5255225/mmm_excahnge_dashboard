import React, { useState } from "react";
import { GeneralButton, TextInput } from "../../components";
import { DashboardWrapper } from "../../templates/dashboardwrapper";
import { FormContainer } from "../../templates/FormContainer";
import { CurrencyTable } from '../../components/CurrencyTable'
export const CurrencyPage: React.FC = () => {
    const [name, setName] = useState('')
    const [mod, setMod] = useState('add')
    const [currencies, setCurrencies] = useState([])
    const onNextFunction = () => {

    }
    const onEditFunction = (data: any) => {

    }
    const onDeleteFunction = (id: string) => {

    }
    return (
        <DashboardWrapper>
            <div className='grid grid-cols-6 grid-flow-row'>
                <div className='col-span-6 md:col-span-2 bg-gray-200' >
                    <FormContainer title={mod === 'add' ? 'Create Form' : 'Edit Form'}>
                        <TextInput value={name} setValue={setName} label='Name' placeholder='e.g USD ,MMK ' />
                        <GeneralButton label={mod === 'add' ? 'Create' : "Update"} onNextFunction={onNextFunction} />
                    </FormContainer>
                </div>
                <div className='col-span-6 md:col-span-4 px-2' >
                    <CurrencyTable data={currencies} onDeleteFunction={onDeleteFunction} onEditFunction={onEditFunction} />
                </div>
            </div>
        </DashboardWrapper>
    )
}