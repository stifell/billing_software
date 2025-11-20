const UsersForm = () => {
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Имя</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="Джон Смит"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Почта</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="yourname@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Пароль</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="*******"/>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersForm;