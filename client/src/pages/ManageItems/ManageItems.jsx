import ItemsForm from '../../components/ItemsForm/ItemsForm';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ManageItems.css';

const ManageItems = () => {
    return (
        <div className="items-contrainer text-light">
            <div className="left-column">
                <ItemsForm />
            </div>
            <div className="right-column">
                <ItemsList />
            </div>
        </div>
    )
}

export default ManageItems;