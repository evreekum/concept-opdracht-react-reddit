import React, {useEffect, useState} from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import logo from "../../assets/reddit_logo.png";
import axios from "axios";
import NavBar from "../../components/navigation/NavBar";
import {Route, Switch} from "react-router-dom";
import Subreddit from "../subreddit/Subreddit";


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
                <main>
                    <h2>Hottest posts</h2>
                    <h5>on Reddit right now</h5>
                    {redditData && redditData.map((dataReddit) => {
                        return (
                            <>
                                <h2 key={dataReddit.title}>{dataReddit.data.title}</h2>
                                <p key={dataReddit.name}>{dataReddit.data.subreddit_name_prefixed}</p>
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