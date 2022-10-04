import React, {useEffect, useState} from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import logo from "../../assets/reddit_logo.png";
import axios from "axios";
import {Link} from "react-router-dom";



function Home() {
    const [redditData, setRedditData] = useState("");


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data.data.children);
                setRedditData(result.data.data.children);

            } catch (e) {
                console.error(e);
            }

        }

        fetchData();
    }, []);

     return (
        <>
            <Header
                title="reddit">
                <img src={logo} alt="Reddit Logo" width="170"
                     height="170"/>

            </Header>
            <div className="inner_container">
                <main className="reddit-card">
                    <h2>Hottest posts</h2>
                    <h5>on Reddit right now</h5>
                    {redditData && redditData.map((dataReddit) => {
                        return (
                            <>
                                <h2 key={dataReddit.title}><a href={dataReddit.data.url} target="_blank">{dataReddit.data.title}</a></h2>
                                <p key={dataReddit.name}><Link to={`/subreddit/${dataReddit.data}`}>{dataReddit.data.subreddit_name_prefixed}</Link></p>
                                <p key={dataReddit.comments}>comments {dataReddit.data.num_comments}</p>
                                <p key={dataReddit.ups}>ups {dataReddit.data.ups}</p>

                            </>
                        )})}

                </main>
            </div>

        </>
    );
}

export default Home;