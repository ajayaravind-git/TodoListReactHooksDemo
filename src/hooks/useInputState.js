import { useState } from "react"

function useFormState(value) {
    const [val, setVal] = useState(value);
    const handleChange = (e) => {
        setVal(e.target.value)
    }
    const reset = () => {
        setVal("")
    }

    return [val, handleChange, reset];

}
export default useFormState;