import React, { useState } from "react";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { BsFillPatchPlusFill } from "react-icons/bs";

function ProductQuantity() {

    const [amount, setAmount] = useState(0);

    const add = () => setAmount(amount === 10 ? amount : amount + 1);
    
    const remove = () => setAmount(amount === 0 ? 0 : amount - 1);

    return (

        <div>
            <BsFillPatchMinusFill onClick={remove} />
            <span>&nbsp;&nbsp;{amount}&nbsp;&nbsp;</span>
            <BsFillPatchPlusFill  onClick={add} />
        </div>
    );
}

export default ProductQuantity;