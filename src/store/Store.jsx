import { createContext, useContext,  useState } from "react";


//creando contexto para todos los ocmponentes 
const AppContext = createContext({
    items: [],
    createItem: () => { },
    getItem: ( id ) => { },
    updateItem: ( item ) => { },
});

//llamar dentro del componenete nuestro contexto 
const  Store = ({children}) => {
    
    const [items, setItems] = useState([]);

    const createItem = (item) => {
        const temp = [...items ]
        temp.push(item);
        setItems(temp);
    }
    
    const getItem = (id) => {
        const item = items.find((item) => item.id === id);
        return item;
    }
    
    const updateItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];
        temp[index] = { ...item };
    }

    return (
        //al llamar una funcion se llamara la funcion correspondiente
        //de las funcuones creadas
        <AppContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem
            
        }}
        > 
            { children }
        </AppContext.Provider>
    )
}

export default Store


export function useAppContext(){
    return useContext(AppContext);
}
