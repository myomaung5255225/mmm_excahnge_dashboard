import React, { useEffect, useState } from "react";
import { DashboardWrapper } from "../../templates/dashboardwrapper";
import { FormContainer } from '../../templates/FormContainer'
import { RateTable } from '../../components/RateTable'
import { CurrencySelector, GeneralButton, TextInput, PageLoader } from "../../components";
import { API } from "../../services";

export const RatePage: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState('')
    const [toCurrency, setToCurrency] = useState('')
    const [currencies, setCurrencies] = useState([])
    const [buy, setBuy] = useState('')
    const [sell, setSell] = useState('')
    const [rates, setRates] = useState([])
    const [loading, setLoading] = useState(false)
    const [mod, setMod] = useState('add')
    const [refresh, setRefresh] = useState(false)

    const getCurrencies = () => {
        setLoading(true)
        API.get('/currency').then(res => {
            setCurrencies(res.data.data)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const getRates = () => {
        setLoading(true)
        API.get('/rate').then(res => {
            setRates(res.data.data)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getRates();
        getCurrencies();
    }, [refresh])

    const onNextFunction = () => {

    }
    const onEditFunction = (data: any) => {

    }
    const onDeleteFunction = (id: string) => {

    }


    return (
        <DashboardWrapper>
            <PageLoader loading={loading} />
            <div className='grid grid-cols-6 grid-flow-row'>
                <div className='col-span-6 md:col-span-2' >
                    <FormContainer title={mod === 'add' ? "Create Form" : "Edit Form"}>
                        <CurrencySelector data={currencies} label="From" value={fromCurrency} setValue={setFromCurrency} />
                        <CurrencySelector data={currencies.filter((value: any) => value._id !== fromCurrency)} label="To" value={toCurrency} setValue={setToCurrency} />
                        <TextInput label="Sell" input_type='number' value={buy} setValue={setBuy} placeholder='13443' />
                        <TextInput label="Buy" input_type='number' value={buy} setValue={setBuy} placeholder='34323' />
                        <GeneralButton label={mod === 'add' ? 'Create' : 'Edit'} onNextFunction={onNextFunction} />
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