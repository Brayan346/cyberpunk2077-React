import { useState } from "react";
import { cyberSectionData } from "../Data";
import './CyberSection.css';

function CyberSection() {

    const [activeTab, setActiveTab] = useState("historia");
    const [activeImage, setActiveImage] = useState(0);

    const currentSection = cyberSectionData[activeTab];

    const tabs = [
        "Historia",
        "Night City",
        "Jugabilidad",
        "Phantom Liberty"
    ]

    return (
        <div>
            <div className="menu">
                {tabs.map(tab => (
                    <button onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="section">
                <h2>{currentSection.titulo}</h2>
                <p>{currentSection.desc}</p>
                <img src="{currentImg.mainImg}" />
                {currentSection.images.map((img, index) => (
                    <img key={index} src={img} />
                ))}
            </div>
        </div>
    );
}

export default CyberSection