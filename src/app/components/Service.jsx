const Service = ()=>{
    return(
        <div className="service" id="service">
            <div className="overlay">
            <div className="container">
                 <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12">
                        <div className="button">
                            <button className="btn submit-now w-25 me-3">أحجز الأن</button>
                            <button className="btn more w-25 ms-3">معرفة المزيد</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-end">
                        <div className="heading-service mb-4">
                        <h1 dir="rtl">Beto Center</h1>
                        </div>
                        <div className="informaiton">
                           <p>
                           مركز بيتو هو من افضل المراكز في الشرق الأوسط في مجال العناية بالشعر
                           وما يميزنا هو الخدمات التي نقدمها والتي تتمثل في
                           </p>
                           <ul className="list" dir="rtl">
                            <li>استخدام منتجات متميزة وذات جوده جيده</li>
                            <li>فروعنا المتواجده في اكثر من ممكان مما يسهل عليك زيارتنا</li>
                            <li>الشهاده التي حصل عليها المركز التي تزيد من ثقة المركز</li>
                            <li>الأخبار المتواجده للمركز التي تحدثت عنها بعض الجرائد الاخبارية</li>
                           </ul>
                        </div>
                    </div>
                 </div>
            </div>
            </div>
            
        </div>
    )
}
export default Service ;