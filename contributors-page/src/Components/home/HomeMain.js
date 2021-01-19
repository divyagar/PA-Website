import React from 'react'
import './HomeMain.css'

function HomeMain() {
    return (
        <div>
            <div id = "introduction">
                <div id = "top-section">
                    <div id = "welcome-msg">
                        <div class = "text">
                            <div>
                                <span class = "welcome">Welcome to</span><br/>
                                <span class = "name">Programmers Army</span>
                            </div>
                            <div class = "lines">
                                Write something nice here using these two lines
                            </div>
                        </div>
                        <div class = "search">
                            <input type = "text" placeholder = "Search for programming resources" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>

                <div id = "pa-features">
                    <div class = "feature">
                        <div class = "feature-img"></div>
                        <div class = "feature-text">
                            <h6>Feature Name</h6>
                            <div class = "text">Some features of programmers army</div>
                        </div>
                    </div>
                    
                    <div class = "feature">
                        <div class = "feature-img"></div>
                        <div class = "feature-text">
                            <h6>Feature Name</h6>
                            <div class = "text">Some features of programmers army</div>
                        </div>
                    </div>
                    
                    <div class = "feature">
                        <div class = "feature-img"></div>
                        <div class = "feature-text">
                            <h6>Feature Name</h6>
                            <div class = "text">Some features of programmers army</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeMain