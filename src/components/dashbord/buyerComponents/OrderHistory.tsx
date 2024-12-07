import auth from '@/firebase/firebase.auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState([]);

    
    useEffect(()=>{
        if (user){
            fetch(`${process.env.DB_URL}/orders/${user?.email}`).then(res=>res.json()).then(data=>setOrders(data))
        }
    },[user])
    return (
        <div>
            order History {orders.length}
        </div>
    );
};

export default OrderHistory;