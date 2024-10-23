import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../store';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container">
      <h2>Danh Sách Hàng Hóa</h2>
      <input type="text" placeholder="Tìm kiếm hàng hóa..." />
      <Link to="/add-product" className="add-product">Thêm Hàng Hóa</Link>
      {products.length === 0 ? (
        <p>Không tìm thấy hàng hóa nào!</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} VND {/* Hiển thị giá tiền */}
              <div>
                <Link to={`/edit-product/${product.id}`} className="edit">Sửa</Link>
                <button onClick={() => handleDelete(product.id)} className="delete">Xóa</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="pagination">
        <button disabled>Trang trước</button>
        <span>Trang 1 / 0</span>
        <button>Trang sau</button>
      </div>
    </div>
  );
};

export default ProductList;
