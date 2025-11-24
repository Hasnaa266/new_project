import book from "../img/books-list.png"
import "./Discovery.css";

const Discover=()=>{
    return(
        <div className="style">
            <div className="dis">
                <div className="details">
                   
                 <h2 className="heroo">استكشف أعماق الأرض مع مجموعتنا الجديدة من كتب الجيولوجيا</h2>
                 <p className="title">سواء كنت طالبا باحثا او عاشقنا للطبيعة ز مجموعتنا الجديدة من كتب الجيولوجيا مصممه خصيصا لك ! من أساسيات الجيلوجيا الي علوم الصخور والبترول والهيدرولوجيا الجيولوجية  اكتشف كنوز المعرفة التي تأخذك في رحلة عبر الزمن والارض ز أضفللمكتبتك مصادر موثوقة تساعدك علي فهم كوكبنا بشكل اعمق </p>
                 <button className="butt">سجل الان!</button>
                </div>
            <div className="imaa">
                <img className="imaage" src={book}/>
            </div>
            </div>
        </div>
    
    )
}
export default Discover;
