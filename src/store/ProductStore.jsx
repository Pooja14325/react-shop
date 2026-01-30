import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext({
    allItems: [],
    setLimit: 12,
});

const ProductContextProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([])
    const [limit, setLimit] = useState(9);
    const [carts, setCarts] = useState([])
    const [categories, setCategories] = useState(["all"]);   // saari categories list
    const [selectedCategory, setSelectedCategory] = useState("all"); // user ka selected category
    const [searchTerm, setSearchTerm] = useState("");        // search bar ke liye

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products/categories')
                setCategories(["all", ...res.data])
            } catch (err) {
                console.error("categories fetch error", err)
            }
        }
        fetchCategories()
    }, [])

    const filteredItem = allItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        const fetchData = async () => {
         try{
            let url = `https://dummyjson.com/products?limit=${limit}`

            if(selectedCategory !== "all") {
             url = `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}?limit=${limit}`
            }

            const res = await axios.get(url);
            setAllItems(res.data.products)
         } catch (err) {
            console.error("products fetch error", err)
         }
        }
        fetchData()
    }, [limit, selectedCategory])

    const addCartHandler = (product) => {
        const isItem = carts.find(item => item.id === product.id);
        if (isItem) {
            setCarts(carts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        }
        else {
            setCarts([...carts, { ...product, quantity: 1 }])
        }
    }

    const removeCartHandler = (id) => {
        setCarts(carts.filter(item => item.id !== id))
    }

    const increament = (id) => {
        setCarts((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    const decreament = (id) => {
        setCarts((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item))
    }

    return <ProductContext.Provider value={{
        allItems,
        filteredItem,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        setLimit,
        carts,
        addCartHandler,
        removeCartHandler,
        increament,
        decreament
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContextProvider
