import CardContainer from './style'
import DesktopImage from '/src/assets/image-header-desktop.jpg'
import MobileImage from '/src/assets/image-header-mobile.jpg'

export default function StatsPreviewCard() {
    return (
        <>
            <CardContainer>
                <div className="card-content">
                    <h1 className="card-title">Get <span className="title-emphasis">insights</span> that help your business grow.</h1>
                    <p className="card-description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                    </p>
                    <div className="card-stats-container">
                        <p className="stats"><span className="stats-emphasis">10k+</span> companies</p>
                        <p className="stats"><span className="stats-emphasis">314</span> templates</p>
                        <p className="stats"><span className="stats-emphasis">12m+</span> queries</p>
                    </div>
                </div>
                <div className="card-img">
                    <div className="bg-img"></div>
                    <picture>
                        <source media="(min-width: 1150px)" srcSet={DesktopImage}/>
                        <img src={MobileImage} alt="A image" />
                    </picture>
                </div>
            </CardContainer>
        </>
    )
}