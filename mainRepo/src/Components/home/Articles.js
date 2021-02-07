import React, {useState, useLayoutEffect, useEffect} from 'react'
import axios from 'axios';
import './Articles.css'

function Articles(props) {
  const [maxArticles, changeMaxArticles] = useState(6);
  const [articleDesign, changeArticleDesign] = useState({});
  const [imageDesign, changeImageDesign] = useState({});
  const [h6Design, changeh6Design] = useState({});
  const [pDesign, changepDesign] = useState({});
  const [articlesData, updateArticlesData] = useState({})
  const [criteriaSelected, updateCriteria] = useState("overall_rating_points")
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(props.domain_id != undefined){
      const url = "https://programmers-army-dev-backend.herokuapp.com/api/article/domain/home?_id=" + props.domain_id + "&limit=" + maxArticles + "&filter=" + criteriaSelected;
      axios.get(url)
      .then(res => {
        updateArticlesData(res.data.domain.articles)
        console.log(res.data.domain.articles)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [props.domain_id, maxArticles, criteriaSelected])

  const handleResize = () => {
    if(window.innerWidth <= 661){
      changeMaxArticles(2);
      changeArticleDesign({
        height : "150px",
        width : "120px"
      });
      changeImageDesign({
        height: "80px"
      })
      changeh6Design({
        "font-size": "10px"
      })
      changepDesign({
        "font-size": "8px"
      })
    }
    else if(window.innerWidth <= 759){
      changeMaxArticles(3);
      changeArticleDesign({
        height : "auto",
        width : "auto"
      });
      changeImageDesign({
        height: "13vw"
      })
      changeh6Design({
        "font-size": "1.5vw"
      })
      changepDesign({
        "font-size": "1.1vw"
      })
    }
    else{
      changeMaxArticles(6);
      changeArticleDesign({
        height : "auto",
        width : "auto"
      });
      changeImageDesign({
        height: "13vw"
      })
      changeh6Design({
        "font-size": "1.5vw"
      })
      changepDesign({
        "font-size": "1.1vw"
      })
    }
  }

  const allArticles = () => {
    var articles = []
    for(var i = 0; i<articlesData.length; i++){
      if(articlesData[i] != undefined){
        articles.push(
          <div class = "article" style = {articleDesign}>
              {/* <div class = "article-img" style = {imageDesign}> */}
                <img class = "article-img" src = {articlesData[i].picture} />
              {/* </div> */}
              <div class = "article-content">
                  <h6 style = {h6Design}>{articlesData[i].title}</h6>
                  <p style = {pDesign}>A small description related to current topic</p>
              </div>
              <div class = "rating">{articlesData[i].ratings.overall_rating_points}</div>
          </div>
        )
      }
    }
    return articles;
  }

  
  const changeVisibility = () => {
    if(document.getElementById("filter-form").style.display == "block")
      document.getElementById("filter-form").style.display = "none";
    else
      document.getElementById("filter-form").style.display = "block"
  }

  const changeCriteria = () => {
    if(document.getElementById('createdAt').checked){
      updateCriteria("createdAt")
    }
    else if(document.getElementById('numberOfViews').checked){
      updateCriteria("numberOfViews")
    }
    else if(document.getElementById('overall_rating_points').checked){
      updateCriteria("overall_rating_points")
    }
    else{
      updateCriteria("numberOfShares")
    }
    console.log(criteriaSelected)
  }

  return (
    <div class = "right-section">
      <div class = "filter-section">
        <div class = "filter-image">
          <img src = {"/Filter.jpg"} onClick={changeVisibility} />
        </div>

        <div id = "filter-form" class = "filter-form">
          <h3>Sort By</h3>
          <div class = "criteria">
            <label for = "createdAt">Newest to Oldest</label>
            <input type="radio" id="createdAt" name="criteria" />
          </div>
          <div class = "criteria">
            <label for = "numberOfViews">Number of Views</label>
            <input type="radio" id="numberOfViews" name="criteria" />
          </div>
          <div class = "criteria">
            <label for = "overall_rating_points">Top rated</label>
            <input type="radio" id="overall_rating_points" name="criteria" />
          </div>
          <div class = "criteria">
            <label for = "numberOfShares">Number of shares</label>
            <input type="radio" id="numberOfShares" name="criteria" />
          </div>

          <div class = "submit-btn">
            <button onClick={changeCriteria}>Sort</button>
          </div>
        </div>
      </div>
      <div class = "design-block"></div>
      <div className = "articles">
          {
            allArticles()
          }
      </div>
    </div>
  )
}

export default Articles
