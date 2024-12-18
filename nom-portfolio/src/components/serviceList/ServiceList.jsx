
import "../sevices/Services.scss";

function ServiceList ({ icon, title, description, delay }){
    return(
        <div className="service-card" style={{ animationDelay: delay }}>
        <div className="icon">
            <i className={`${icon} fa-4x`}></i>
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
    </div>
    )
}


export default ServiceList;