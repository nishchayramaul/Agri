import React from 'react'
import styled from 'styled-components'
export const Article1 = ({ data }) => {
  return (
    <Article>
      {data && data.length > 0 && data?.slice(0, 1).map((content, index) => (
        <div key={index} className="heading">
            {/*heading rendering*/ }
          <h1>{content.title} </h1>
          <div style={{border:'solid 2px black'}}></div>
        </div>
      ))}
      <div className="section">
        {data && data.length > 0 && data?.slice(0, 1).map((content, index) => (
          <div key={index} className="paragraph">
            {/*article rendering*/ }
            <p>{content.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit soluta incidunt c
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione.
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione</p>
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione
            onsequuntur in officia dolorem ducimus molestiae aperiam, 
            enim eius maiores, a quam hic voluptate dicta quidem. Tempora, eligendi ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur quaerat enim aliquid iste totam, 
            nam perspiciatis sit quibusdam natus voluptates eum laudantium earum minima. Laborum consequuntur laudantium suscipit ratione

          </div>
        ))}
       
        {data && data.length > 0 && data?.slice(0, 1).map((content, index) => (
          <div key={index} className="sidebar">
            {/*article rendering*/ }
            <img src={content.urlToImage} alt="article"/>
          </div>
        ))}
        </div>
    </Article>
  );
};


const Article = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 10%;
    padding: 20px;
  }

  .section {
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  .paragraph {
    width: 60vw;
    padding: 20px;
    height: auto;
  }

  .sidebar {
    width: 40vw;
    height: auto;
  }

  img {
    height: auto;
    max-width: 100%; /* Set maximum width to 100% to prevent overflowing */
  }

  @media (max-width: 768px) {
    .section {
      flex-direction: column;
      gap: 2rem;
    }

    .paragraph {
      width: 90vw;
    }

    .sidebar {
      width: 90vw;
    }
  }

  @media (max-width: 480px) {
    h1 {
      margin-top: 5%;
    }
  }
`;