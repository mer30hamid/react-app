import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 29 },
  { id: 3, name: 'Desk', category: 'Furniture', price: 299 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 199 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 399 },
];

function FilteredList() {
  const [category, setCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  // Filter
  const filteredProducts =
    category === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product Catalog</h2>

      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <div>
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Sort by:
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </label>
        </div>
      </div>

      <div>
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              padding: '1rem',
              marginBottom: '0.5rem',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <strong>{product.name}</strong>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>{product.category}</div>
            </div>
            <div style={{ fontWeight: 'bold' }}>${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredList;