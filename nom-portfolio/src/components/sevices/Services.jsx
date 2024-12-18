import ServicesList from "../serviceList/ServiceList";
import servicesData from "../../datas/servicesData.json"
import "./services.scss";


function Services () {

    return (
        <div id="services" className="services">
                    <h2>Services</h2>
                <div className="services-grid">
            {servicesData.map((service, index) => (
                <ServicesList
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    delay={service.delay}
                />
            ))}
        </div>
        </div>
    );
};

export default Services;
