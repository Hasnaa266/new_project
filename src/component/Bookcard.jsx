import React from 'react';


function BookCard({ bookData }) {
  return (
    <div className="book-card" style={{ 
        border: '1px solid #ddd', 
        padding: '15px', 
        borderRadius: '8px', 
        textAlign: 'center',
        margin: '10px'
    }}>
      
     
      <h3 style={{ margin: '5px 0', color: '#333' }}>{bookData.title_ar}</h3>
      
      <p style={{ margin: '0 0 10px', color: '#666', fontSize: '0.9em' }}>
        ({bookData.title_en})
      </p>
      
      <p className="book-author">المؤلف: {bookData.author}</p>
      
     
      <p className="book-rating">
        <span role="img" aria-label="star">⭐</span> ({bookData.rating})
      </p>

      {/* 4. قسم السعر */}
      <div className="price-section" style={{ margin: '10px 0' }}>
        {/* السعر القديم المشطوب */}
        <span style={{ textDecoration: 'line-through', color: '#999', margin: '0 10px' }}>
            ${bookData.old_price.toFixed(2)}
        </span> 
        {/* السعر الحالي */}
        <span style={{ color: '#E9573F', fontWeight: 'bold', fontSize: '1.4em' }}>
            ${bookData.price.toFixed(2)}
        </span>
      </div>

      {/* 5. زر الإضافة للسلة */}
      <button style={{ 
          backgroundColor: '#F39C12', 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '10px'
      }} className="add-to-cart-button">
        🛒 أضف إلى عربة التسوق
      </button>
      
    </div>
  );
}

export default BookCard;
