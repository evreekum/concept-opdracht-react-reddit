import React, {useEffect, useState} from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import logo from "../../assets/reddit_logo.png";
import axios from "axios";
import {Link} from "react-router-dom";
import titleLength from "../../helperfuncties/titleLength";
import numberDots from "../../helperfuncties/numberDots";
import Footer from "../../components/Footer";

function Home() {
    const [redditData, setRedditData] = useState("");
    const [, toggleError] = useState(false);


    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data.data.children);
                setRedditData(result.data.data.children);

            } catch (e) {
                console.error(e);
                toggleError(true);
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

                <h2>Hottest posts</h2>
                <h5>on Reddit right now</h5>
                <main>
                    {redditData && redditData.map((dataReddit) => {
                        return (
                            <>
                                <section className="reddit-card">
                                    <article className="reddit-card-title">
                                        <h3 key={dataReddit.title}><a className="reddit-title"
                                                                      href={dataReddit.data.url}
                                                                      target="_blank"
                                                                      rel="noreferrer">{titleLength(dataReddit.data.title)}</a>
                                        </h3>
                                    </article>
                                    <article>
                                        <div>
                                            <p key={dataReddit.name}><Link className="reddit-author"
                                                                           to={`subreddit/${dataReddit.data.subreddit}`}>{dataReddit.data.subreddit_name_prefixed}</Link>
                                            </p>
                                        </div>

                                        <div className="reddit-comments-ups">
                                            <p className="reddit-comments"
                                               key={dataReddit.comments}>comments {numberDots(dataReddit.data.num_comments)}</p>
                                            <hr/>
                                            <p key={dataReddit.ups}>ups {numberDots(dataReddit.data.ups)}</p>
                                        </div>
                                    </article>
                                </section>
                            </>
                        )
                    })}

                </main>

            </div>
            <Footer/>
        </>
    );
}

export default Home;