import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react"
import "./styles.css"

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body, 
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="backP">
      <div className="titul"><h1>ARTIGOS</h1>
      </div>

      <div className="postagens">


        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/artigos/" + post.slug.current} key={post.slug.current}>

              <div className="bloco" key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                  <div>
                    <BlockContent
                      blocks={post.body}
                      projectId="k7bcr9m4"
                      dataset="production"
                    />
                  </div>

                  <h4>Publicado em: {post.publishedAt} {console.log(post)}</h4>

                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}