import React, { useState } from "react";
import { DashboardWrapper } from "../../templates/dashboardwrapper";
import { FormContainer } from '../../templates/FormContainer'
import { RateTable } from '../../components/RateTable'
export const RatePage: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState('')
    const [toCurrency, setToCurrency] = useState('')
    const [buy, setBuy] = useState('')
    const [sell, setSell] = useState('')
    const [rates, setRates] = useState([])
    const onNextFunction = () => {

    }
    const onEditFunction = (data: any) => {

    }
    const onDeleteFunction = (id: string) => {

    }
    return (
        <DashboardWrapper>
            <div className='grid grid-cols-6 grid-flow-row'>
                <div className='col-span-6 md:col-span-2' >
                    <FormContainer title='Rate form'>

                    </FormContainer>
                </div>
                <div className='col-span-6 md:col-span-4' >
                    <div>
                        <RateTable data={rates} onDeleteFunction={onDeleteFunction} onEditFunction={onEditFunction} />
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}