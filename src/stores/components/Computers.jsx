import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
    const firstFiveComputers = computerData.slice(0, 5)
    return (
        <>
            <div className='pro-title'>
                <h2>Computers</h2>
                <div className='pro-section'>
                    {
                        firstFiveComputers.map((item) => {
                            return (
                                <div key={item.id} className='item-img'>
                                    <img src={item.image} alt="" />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </>
    )
}

export default Computers