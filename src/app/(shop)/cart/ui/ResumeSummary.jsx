'use client';

import { useState, useEffect } from "react";
import { useCartStore } from "@/store";

const ResumeSummary = () => {

    const summaryData = useCartStore(state => state.getSummaryInformation());
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, [])

    if (!load) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                <span>Nro. Productos</span>
                <span className="text-right">{summaryData.totalItems} articulos</span>

                <span>Subtotal</span>
                <span className="text-right">${summaryData.subTotal}</span>

                <span>Impuestos (11%)</span>
                <span className="text-right">${summaryData.tax}</span>

                <span className="text-2xl mt-5">Total</span>
                <span className="text-right text-2xl mt-5">${summaryData.total}</span>
            </div>
        </div>
    )
}

export default ResumeSummary;