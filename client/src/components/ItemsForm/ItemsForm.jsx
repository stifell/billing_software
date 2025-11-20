const ItemsForm = () => {
    return (
        <div className="item-form-container" style={{height:'100vh', overflowY:'auto', overflowX:'hidden'}}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src="https://placehold.co/48x48" alt="" width={48}/>
                                    </label>
                                    <input type="file" name="image" id="image" className="form-control" hidden />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Имя</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Имя товара"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Категория
                                    </label>
                                    <select name="category" id="category" className="form-control">
                                        <option value="">--Выберите категорию--</option>
                                        <option value="Category 1">Категория 1</option>
                                        <option value="Category 2">Категория 2</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="from-label">Цена</label>
                                    <input type="number" name="price" id="price" className="form-control" placeholder="&#8381;100" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Описание</label>
                                    <textarea rows="5" name="description" id="description" className="form-control" placeholder="Пишите содержимое здесь..."/>
                                </div>
                                <button type="submit" className="btn btn-success w-100">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsForm;