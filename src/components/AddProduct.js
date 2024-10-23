import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(''); // Thêm state cho giá tiền
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = () => {
    if (name.trim() && price.trim()) {
      const newProduct = {
        id: Date.now(),
        name,
        price, // Thêm giá tiền vào object sản phẩm
      };
      dispatch(addProduct(newProduct));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h2>Thêm Hàng Hóa</h2>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá tiền"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Thêm</button>
    </div>
  );
};

export default AddProduct;
