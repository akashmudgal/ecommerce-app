
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

const CategoriesDirectory = ({ categories }) => {
    return (
        <div className='directory-container'>
        {
            categories.map(category=>{
                return <CategoryItem key={category.id} category={category} />
            })
        }
        </div>
    );
}

export default CategoriesDirectory;