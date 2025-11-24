import { booksData } from "../data/api";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
    
      <div className="cardd">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-subtitle">{book.subtitle}</p>

      <p className="book-desc">{book.desc}</p>
      <p className="book-author">{book.author}</p>

      <p className="book-rate">⭐️ {book.rate}</p>

      <div className="prices">
        <span className="old">${book.oldPrice}</span>
        <span className="new">${book.newPrice}</span>
      </div>


      <button className="cart-btn">أضف إلى عربة التسوق</button>
    </div>
      <div className="card">
      <img className="book-img" src={book.img} alt={book.title} />
      </div>
    </div>
  );
};

export default function Nots() {
  return (
    <div className="books-container">
        <h1 style={{textAlign:"right"}}>المذكرات </h1>
      <h2 className="main-title">عرض جميع الكتب</h2>

      <div className="books-grid">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}