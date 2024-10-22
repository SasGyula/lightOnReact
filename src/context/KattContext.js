import { createContext, useState } from "react";

export const KattContext = createContext("")

export const KattProvider = ({ children }) => {
    const [LISTA, setLista] = useState(listaFeltolt())
    const [lepes, setLepes] = useState(0);

    function katt(adat) {
        const slista = [...LISTA];
        if (lepes % 2 == 0) {
            slista[adat] = true;
            console.log(slista[adat]);
        } else {
            slista[adat] = false;
            console.log(slista[adat]);
        }
        setLista([...slista]);

        let sv = lepes;
        sv++;
        setLepes(sv);
    }

    function listaFeltolt() {
        const sLista = []
        for (let i = 0; i < 9; i++) {
            if (Math.random() < .2) {
                sLista[i] = true
            } else {
                sLista[i] = false
            }
        }
        return [...sLista]
    }
    return <KattContext.Provider value={{LISTA,katt}}>
        {children}
        </KattContext.Provider>
}