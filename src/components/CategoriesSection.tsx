import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Our Categories
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Fiction Books"
          image="category-1-fiction-books.jpeg"
          link="fiction-books"
        />
        <CategoryItem
          categoryTitle="Non-Fiction Books"
          image="category-2-non-fiction-books.webp"
          link="non-fiction-books"
        />
        <CategoryItem
          categoryTitle="Children’s Books"
          image="category-3-children-books.jpg"
          link="children-books"
        />
        <CategoryItem
          categoryTitle="Academic & Educational Books"
          image="category-4-academic-educational-books.jpg"
          link="academic-educational-books"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
