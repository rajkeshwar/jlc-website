import CategoriesWidget from '@/components/Widget/CategoriesWidget';
import RecentPost from '@/components/Widget/RecentPost';

const SinglePostSidebar = () => {

    return (
        <>
            <RecentPost />
            <CategoriesWidget />
        </>
    );
}

export default SinglePostSidebar;