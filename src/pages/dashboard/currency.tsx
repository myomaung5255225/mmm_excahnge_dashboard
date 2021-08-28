import React, { useEffect, useState } from "react";
import { GeneralButton, Modal, PageLoader, TextInput } from "../../components";
import { DashboardWrapper } from "../../templates/dashboardwrapper";
import { FormContainer } from "../../templates/FormContainer";
import { CurrencyTable } from '../../components/CurrencyTable'
import { API } from "../../services";
export const CurrencyPage: React.FC = () => {
    const [name, setName] = useState('')
    const [mod, setMod] = useState('add')
    const [currencies, setCurrencies] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState('')
    const [show, setShow] = useState(false)

    const getCurrencies = () => {
        setLoading(true)
        API.get('/currency').then(res => {
            if (res.status === 200) {
                setCurrencies(res.data.data)
            }
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        getCurrencies()
    }, [refresh])
    const onNextFunction = () => {
        if (mod === 'add') {
            setLoading(true)
            API.post('/currency', {
                name: name,
                keyword: name.toLocaleLowerCase()
            }).then(res => {
                console.log(res.data)
            })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                    setRefresh(!refresh)
                    setName('')
                })
        }
        else {
            setLoading(true)
            API.put('/currency', {
                id: id,
                name: name,
                keyword: name.toLowerCase()
            }).then(res => {
                console.log(res.data)
            })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                    setMod('add');
                    setRefresh(!refresh)
                    setName('');

                })
        }
    }
    const onEditFunction = (data: any) => {
        setMod('edit');
        setId(data._id);
        setName(data.name);
    }
    const onDeleteFunction = (id: any) => {
        setId(id);
        setShow(true)
    }
    const onNextDelete = () => {
        setLoading(true)
        setShow(false)
        API.delete('/currency', { data: { id: id } }).then(res => {
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
                    <FormContainer title={mod === 'add' ? 'Create Form' : 'Edit Form'}>
                        <TextInput value={name} setValue={setName} label='Name' placeholder='e.g USD ,MMK ' />
                        <GeneralButton label={mod === 'add' ? 'Create' : "Update"} onNextFunction={onNextFunction} />
                    </FormContainer>
                </div>
                <div className='col-span-6 md:col-span-4 px-2' >
                    <CurrencyTable data={currencies} onDeleteFunction={onDeleteFunction} onEditFunction={onEditFunction} />
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