import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
//import axios from 'axios'; // Import axios here
//import { StoreContext } from '../../store/StoreContext';

function Verify() {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    console.log(success, orderId);
   // const { url } = useContext(StoreContext);
    //const navigate = useNavigate();

/*    const verifyPayment = async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            console.log('Response from server:', response.data); // Log the entire response for debugging
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            navigate("/"); // Redirect to home on error
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []); 
*/
    return (
        <div className='verify'>
            <div className="spinner">
                Verifying payment...
            </div>
        </div>
    );
}

export default Verify;
