// components/CategoryDropdown.jsx
'use client';

const categories = ['All', 'Product', 'Marketing', 'Design', 'Development', 'Sales', 'Customer Service'];

const CategoryDropdown = ({ selectedCategory, onCategoryChange }) => {
    return (
        <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"
        >
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;