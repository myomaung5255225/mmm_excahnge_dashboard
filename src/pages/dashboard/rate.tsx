import React, { useEffect, useState } from "react";
import { DashboardWrapper } from "../../templates/dashboardwrapper";
import { FormContainer } from '../../templates/FormContainer'
import { rateProps, RateTable } from '../../components/RateTable'
import { CurrencySelector, GeneralButton, TextInput, PageLoader, Modal } from "../../components";
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
    const [show, setShow] = useState(false)
    const [id, setId] = useState('')

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
        if (mod === 'add') {
            setLoading(true)
            API.post('/rate', {
                "from_currency": fromCurrency,
                "to_currency": toCurrency,
                "sell": sell,
                "buy": buy
            }).then(res => {
                console.log(res.data)
            })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setBuy('');
                    setSell('')
                    setFromCurrency('')
                    setToCurrency('')
                    setLoading(false)
                    setRefresh(!refresh)
                    setMod("add")
                })
        }
        else {
            setLoading(true)
            API.put('/rate', {
                "from_currency": fromCurrency,
                "to_currency": toCurrency,
                "sell": sell,
                "buy": buy,
                "id": id
            }).then(res => {
                console.log(res.data)
            })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setBuy('');
                    setSell('')
                    setFromCurrency('')
                    setToCurrency('')
                    setLoading(false)
                    setRefresh(!refresh)
                    setMod("add")
                })
        }
    }
    const onEditFunction = (data: rateProps) => {
        setMod('edit')
        setId(data._id);
        setFromCurrency(data.from_currency?._id);
        setToCurrency(data.to_currency?._id);
        setSell(data.sell)
        setBuy(data.buy)
    }
    const onDeleteFunction = (id: any) => {
        setShow(true)
        setId(id)
    }
    const onNextDelete = () => {
        setLoading(true)
        setShow(false)
        API.delete('/rate', { data: { id: id } }).then(res => {
            console.log(res.data)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
                setRefresh(!refresh)

            })

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
                        <TextInput label="Buy" input_type='number' value={sell} setValue={setSell} placeholder='34323' />
                        <GeneralButton disalbed={!fromCurrency || !toCurrency || !sell || !buy} label={mod === 'add' ? 'Create' : 'Update'} onNextFunction={onNextFunction} />
                    </FormContainer>
                </div>
                <div className='col-span-6 md:col-span-4' >
                    <div>
                        <RateTable data={rates} onDeleteFunction={onDeleteFunction} onEditFunction={onEditFunction} />
                    </div>
                </div>
            </div>
            <Modal show={show} setShow={setShow} title="💣" onNextFunction={onNextDelete}>
                <div className='px-2 py-2 text-red-500'>
                    Are you sure to want to delete?
                </div>
            </Modal>
        </DashboardWrapper>
    )
}