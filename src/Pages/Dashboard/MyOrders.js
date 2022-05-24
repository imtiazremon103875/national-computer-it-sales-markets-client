import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h2 className='text-3xl text-center'>my orders</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>quantity</th>
                            <th>Total price </th>
                            <th>delete</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>

                            <td>quantity</td>
                            <td>total price</td>
                            <th>
                                <FontAwesomeIcon icon={faTrash} />
                            </th>
                            <th>Pay</th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;