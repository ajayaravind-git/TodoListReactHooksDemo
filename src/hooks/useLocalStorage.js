import { useState, useEffect } from "react";



//to take a key and update the value of that key in the local storage.
// output: const [key,setKeyValue]=useLocalStorage("key",defaultValue)
// output is same as that of a useState, but the state will be synced with the local storage.

function useLocalStorage(key, defaultVal) {

    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        } catch {
            val = defaultVal;
        }
        return val;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);
    return [state, setState];



}
export default useLocalStorage;
