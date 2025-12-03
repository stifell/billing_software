import { AppContext } from "../../context/AppContent.jsx";
import { assets } from "../../assets/assets";
import { addItem } from '../../service/ItemService.js';
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const ItemsForm = () => {
    const {categories, setItemsData, itemsData, setCategories} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        categoryId: "",
        price: "",
        description: ""
    });
    const [loading, setLoading] = useState(false);

    const onChangeHandler = async (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data, [name]: value}));
    };

    const onSubmbitHandler = async (e) => {
        e.preventDefault;
        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data));
        formData.append("file", image);
        try {
            if (!image) {
                // toast.error("Выберите изображение для товара");
                console.error("Выберите изображение для товара");
                return;
            }
            const response = await addItem(formData);
            if (response.status === 201) {
                setItemsData([...itemsData, response.data]);
                setCategories((prevCategories) => 
                prevCategories.map((category) => category.categoryId === data.categoryId ? {...category, items: category.items + 1} : category));
                // toast.success("Товар успешно добавлен");
                console.log("Товар успешно добавлен");
                setData({
                    name: "",
                    categoryId: "",
                    price: "",
                    description: ""
                });
                setImage(false);
            } else {
                console.error("Ошибка при добавлении товара");
                // toast.error("Ошибка при добавлении товара");
            }
        } catch (error) {
            // toast.error("Ошибка при добавлении товара");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="item-form-container" style={{height:'100vh', overflowY:'auto', overflowX:'hidden'}}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form onSubmit={onSubmbitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48}/>
                                    </label>
                                    <input type="file" name="image" id="image" className="form-control" hidden onChange={(e) => setImage(e.target.files[0])}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Имя</label>
                                    <input type="text" 
                                        name="name" 
                                        id="name" 
                                        className="form-control"
                                        placeholder="Имя товара"
                                        onChange={onChangeHandler}
                                        value={data.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Категория
                                    </label>
                                    <select name="categoryId" id="category" className="form-control" onChange={onChangeHandler} value={data.categoryId}>
                                        <option value="">--Выберите категорию--</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.categoryId}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="from-label">Цена</label>
                                    <input type="number" 
                                        name="price" 
                                        id="price" 
                                        className="form-control" 
                                        placeholder="&#8381;100"
                                        onChange={onChangeHandler}
                                        value={data.price}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Описание</label>
                                    <textarea rows="5" 
                                        name="description" 
                                        id="description" 
                                        className="form-control" 
                                        placeholder="Пишите содержимое здесь..."
                                        onChange={onChangeHandler}
                                        value={data.description}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100" disabled={loading}>{loading ? "Сохранение..." : "Сохранить"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsForm;