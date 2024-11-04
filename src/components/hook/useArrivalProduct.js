import { useState, useEffect } from "react";

const useArrivalProduct = (checkValue = "") => {
    const [arrivalData, setArrivalData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        try {
            setLoading(true);
            const url = checkValue
                ? `https://fakestoreapi.com/products/category/${checkValue}`
                : 'https://fakestoreapi.com/products?limit=20';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            // console.log(data);
            setArrivalData(data);
        } catch (err) {
            setError(err.message);
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Trigger fetchData when checkValue changes
    useEffect(() => {
        fetchData();
    }, [checkValue]);


    return { arrivalData, error, loading };
};

export default useArrivalProduct;
