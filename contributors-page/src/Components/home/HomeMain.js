import React, {useState} from 'react'
import Introduction from './Introduction'
import ArticlesSection from './ArticlesSection'
import SliderTutorial from './SliderTutorial'
import UpcomingActivities from './UpcomingActivities'

function HomeMain() {

    return (
        <div id = "homepage">
            <Introduction />
            <ArticlesSection />
            <UpcomingActivities />
            <div class = "footer" style = {{height:"300px", background:"#0f2f63"}}></div>
        </div>
    )
}

export default HomeMain
