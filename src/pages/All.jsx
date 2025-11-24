import ground from "../img/ground.png";
import geology from "../img/geology.png"
import './All.css'
const ALL =()=>{
    return(
        <div className="review">
            <div className="review-card">
             <div className="bookdisplay">
             <div className="bookgrid">
                <img src={ground} className="bookitem"/>
                 <img src={geology} className="bookitem"/>
                   <img src={geology} className="bookitem"/>
                    <img src={ground} className="bookitem"/>
             </div>
              </div>
              <div className="deta">
                <h2 className="retitle">
                    مراجعات شاملة في مادة الجيولوجيا 
                    <span className="subtitle">
                        استعد للنجاح
                    </span>
                    </h2>
                  <p className="boddy">
                    هل انت مستعد لاحتياز امتحانات الجيولوجيا؟ نقدم لك سلسلة مراجعات شاملة تغطي جميع مواضيع المادة بأسلوب مبسط ومركز ز انضم الينا لتطوير فهمك للجيولوجيا
                  </p>
             <button className="action">تصفح المراجعات </button>
                </div>
              </div>
           </div>
    )
 }
 export default ALL;