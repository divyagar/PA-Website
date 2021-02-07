import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './ArticlesSection.css'
import SliderTutorial from './SliderTutorial.js'
import Articles from './Articles'

function ArticlesSection() {
    const [domains, setDomains] = useState([])
    const [content, setContent] = useState([])
    const [domainIds, setDomainIds] = useState([])
  useEffect(async () => {
    axios.get("https://programmers-army-dev-backend.herokuapp.com/api/article/domains")
    .then(res=>{
      setDomains(res.data.domains)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    setContent([])
    setDomainIds([])
    Object.keys(domains).forEach(key => setContent(arr => [...arr, domains[key].title]))
    Object.keys(domains).forEach(key => setDomainIds(arr => [...arr, domains[key]._id]))
  }, [domains]);

    const [currDiv, changeDiv] = useState("0")
    const [contentHeight, changeContentHeight] = useState("50vw");

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        if(window.innerWidth <= 759){
          changeContentHeight("34vw");
        }
        else{
          changeContentHeight("50vw");
        }
    };

    return (
        <div id = "articles-section">
            <h2 class = "section-heading">Articles</h2>
            <div class = "content" style = {{height: contentHeight}}>
                <div class = "left-section">
                  <SliderTutorial change = {changeDiv} content = {content}/>
                </div>
                <Articles domain_id = {domainIds[currDiv]}/>
            </div>
        </div>
    )
}

export default ArticlesSection
