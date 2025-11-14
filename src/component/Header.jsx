import '../component/Header.css';
import book1 from '../img/book1.png'
import book2 from '../img/book2.png'

const Header=()=>{
    return(
       
    <header className="head">
        <div className="hero">
        <div className="contact">
    <div className="image">
    <div class='image-item first'>
    <img src={book2}/>
    </div>
     <div class='image-item scound '>
     <img src={book1}/>
     </div>
      <div class='image-item third '>
    <img src={book2}/>
     </div>
     </div>
        <div className="text">
     <p>
        بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية
         لفهم تكوين الأرض وتاريخها. تقدم هذه الكتب معلومات معمقة حول الصخور،
          المعادن، البراكين، الزلازل، وتحركات الصفائح التكتونية، مما يساعد القارئ على
           فهم البيئات الطبيعية والكوارث الجيولوجية. من خلال توفير كتب الجيولوجيا،
         يمكن للقراء الاطلاع على أحدث الدراسات والنظريات المتعلقة بعلم الأرض، مما 
         يعزز من وعيهم البيئي ويشجعهم على المشاركة في الحفاظ على كوكبنا.
     </p>

<button className="header-button">سجل الان</button>
</div>

      </div>
  
</div>
    </header>
    );
}
export default Header;