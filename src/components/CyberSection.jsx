import { useState } from "react";
import { cyberSectionData } from "../Data";
import "./CyberSection.css";

function CyberSection() {

    const [activeTab, setActiveTab] = useState("historia");
    const [activeImage, setActiveImage] = useState(0);

    const currentSection = cyberSectionData[activeTab];

    const tabs = [
        { id: "historia", label: "Historia" },
        { id: "nightcity", label: "Night City" },
        { id: "jugabilidad", label: "Jugabilidad" },
        { id: "phantomliberty", label: "Phantom Liberty" }
    ];

    const changeTab = (tabId) => {
        setActiveTab(tabId);
        setActiveImage(0);
    };

    return (
        <div className="cyber-container">
            <div className="tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => changeTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}

            </div>
            <div className="section">
                <div className="image-container">
                    <img
                        className="main-image"
                        src={currentSection.images[activeImage]}
                        alt=""
                    />
                </div>
                <div className="info">
                    <h2>{currentSection.titulo}</h2>
                    <p>{currentSection.desc}</p>
                    <div className="gallery">
                        {currentSection.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className={`thumb ${activeImage === index ? "active" : ""}`}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CyberSection;