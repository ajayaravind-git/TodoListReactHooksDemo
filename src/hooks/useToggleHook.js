import { useState } from "react";

function useToggleHook(iniVal) {
    const [val, setVal] = useState(iniVal)
    const toggle = () => { setVal(!val); }
    const state = val;
    return [state, toggle];
}
export default useToggleHook;