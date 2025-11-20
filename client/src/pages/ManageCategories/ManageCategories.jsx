import './ManageCategories.css';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import CategoryList from "../../components/CategoryList/CategoryList";

const ManageCategories = () => {
    return (
        <div className="category-contrainer text-light">
            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
        </div>
    )
}

export default ManageCategories;