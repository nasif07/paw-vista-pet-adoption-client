import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import moment from "moment/moment";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [donationAmount, setDonationAmount] = useState();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (donationAmount) {
            axiosSecure.post('/create-payment-intent', { donationAmount })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, donationAmount])

    const handleamountSubmit = (event) => {
        event.preventDefault();
        // Update the input field value in the state
        console.log(event.target.amount.value);
        // if()
        setDonationAmount(event.target.amount.value);

    };
    console.log(donationAmount);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            setError('');
            console.log('payment method', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });
        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user.email,
                    donationAmount: donationAmount,
                    transactionId: paymentIntent.id,
                    date:  moment().subtract(10, 'days').calendar(), // utc data convert. use moment js to
                    status: 'panding'
                }
                console.log(payment);

                const res = await axiosSecure.post('/allDonars', payment);
                console.log('payment saved', res.data);
            }
        }
    }
    return (
        <>
            <form onSubmit={handleamountSubmit}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">User Name</span>
                    </div>
                    <input name="amount" type="number" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <button className="btn btn-outline mt-4" type="submit">Confirm Amount</button>
            </form>
            <form onSubmit={handleSubmit}>


                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret} className="mt-8 bg-[#3B3B3B] text-white btn " >
                    Pay
                </button>
                <p className="text-red-400">{error}</p>
                {transactionId && <p className="text-green-400">Your Transaction Id is: {transactionId}</p>}
            </form></>
    );
};

export default CheckOutForm;