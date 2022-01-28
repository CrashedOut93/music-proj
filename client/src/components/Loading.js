import React, { useState, useEffect }from 'react';
import ClipLoader from "react-spinners/ClipLoader";



function Loading() {
    const [loading, setLoading] = useState(false);



    return (<div>
    

    <ClipLoader color={color} loading={loading} size={30} />
    </div>

    )
}


export default Loading;
