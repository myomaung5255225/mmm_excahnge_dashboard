import React from "react";
interface loadingProps {
    loading: any
}
export const PageLoader: React.FC<loadingProps> = ({ loading }) => {
    return (
        loading && (
            <div>
                <div
                    className='fixed z-10 inset-0 overflow-y-auto'
                    aria-labelledby='modal-title'
                    role='dialog'
                    aria-modal='true'
                >
                    <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                        <div
                            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                            aria-hidden='true'
                        ></div>

                        <span
                            className='hidden sm:inline-block sm:align-middle sm:h-screen'
                            aria-hidden='true'
                        >
                            &#8203;
                        </span>

                        <div className='inline-block align-bottom bg-transparent rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                            <div className='bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                <div className='sm:flex sm:items-start'></div>
                            </div>
                            <div className='bg-transparent px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center items-center content-center'>
                                <img
                                    src='/logo192.png'
                                    alt='logo'
                                    className='w-16 h-16 animate-spin'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}