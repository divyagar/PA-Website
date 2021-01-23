import React, {useState} from 'react'
import './ArticlesSection.css'
import SliderTutorial from './SliderTutorial.js'

function ArticlesSection() {
    const content = ["Data Structures", "Algorithms", "Dynamic Programming",
     "Bit Manipulation", "Number Theory", "Graphs", "Trees"]

    const [currDiv, changeDiv] = useState("initial div")
    return (
        <div id = "articles-section">
            <h2>Articles</h2>
            <div class = "content">
                <div class = "left-section">
                    <SliderTutorial change = {changeDiv} content = {content}/>
                    <div>
                        {
                            content[currDiv]
                        }
                    </div>

                </div>
                <div class = "right-section">
                    <div class = "design-block"></div>
                    <div class = "articles">
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                        
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                        
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                        
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                        
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                        
                        <div class = "article">
                            <div class = "article-img"></div>
                            <div class = "article-content">
                                <h6>Two lines for topic name section</h6>
                                <p>A small description related to current topic</p>
                            </div>
                            <div class = "rating">4.3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesSection
