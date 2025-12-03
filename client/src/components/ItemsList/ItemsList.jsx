import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContent";
import { deleteItem } from "../../service/ItemService";
import './ItemsList.css';
import toast from "react-hot-toast";

const ItemsList = () => {
    const {itemsData, setItemsData} = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");
    const filterItems = itemsData.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const removeItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response === 204) {
                const updatedItems = itemsData.filter(item => item.itedmId !== itemId);
                setItemsData(updatedItems);
                // toast.success("Товар успешно удален");
                console.log("Товар успешно удален");
            } else {
                // toast.error("Не удается удалить товар");
                console.log("Не удается удалить товар");
            }
        } catch (e) {
            // toast.error("Не удается удалить товар");
            console.error(e);
        }
    }

    return (
        <div className="category-list-container" style={{height:'100vh', overflowY: 'auto', overflowX: 'hidden'}}>
            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input type="text" 
                        name="keyword" 
                        id="keyword" 
                        placeholder="Поиск по ключевым словам" 
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filterItems.map((item, index) => (
                    <div className="col-12" key={index}>
                        <div className="card p-3 bg-dark">
                            <div className="d-flex align-items-center">
                                <div style={{marginRight: '15px'}}>
                                    <img src={item.imgUrl} alt={item.name} className="item-image" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 text-white">{item.name}</h6>
                                    <p className="mb-0 text-white">
                                        Категория: {item.categoryName}
                                    </p>
                                    <span className="mb-0 text-block badge rounded-pill text-bg-warning">
                                        &#8381;{item.price}
                                    </span>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.itemId)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default ItemsList;