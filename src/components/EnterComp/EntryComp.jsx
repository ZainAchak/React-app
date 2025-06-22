/* eslint-disable react/prop-types */
import React from "react";
import markerImage from "../../assets/marker.png"

export default function EntryComp(props) {
    const TravelData = props.travelData;
    return(
        <main>
            {
                TravelData.map((tData,index)=> (
                    <article key={tData.id}>
                        <div className="image-container">
                            <img src={tData.img.src} alt={tData.img.alt} />
                        </div>
                        <div className="dataContainer">
                            <div className="countryData">
                                <img src={markerImage} alt="marker" />
                                <span>{tData.country}</span>
                                <a href={tData.googleMapsLink}><span>View on Google Maps</span></a>
                            </div>
                            <h1>{tData.title}</h1>
                            <span>{tData.dates}</span>
                            <p>{tData.text}</p>
                        </div>
                    </article>
                ))
            }
            {/* <article>
                <div className="image-container">
                    <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
                </div>
                <div className="dataContainer">
                    <div className="countryData">
                        <img src={markerImage} alt="marker" />
                        <span>JAPAN</span>
                        <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"><span>View on Google Maps</span></a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <span>12 Jan, 2021 - 24 Jan, 2021</span>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </article> */}
        </main>
    )
}

