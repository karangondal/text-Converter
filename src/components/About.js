import React, { useState } from 'react';

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setBtnText] = useState('Enable Dark Mode');
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark Mode');
    } else {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Enable Light Mode');
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion based on index
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" style={myStyle} id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                style={myStyle}
                onClick={() => toggleAccordion(1)} // Toggle first accordion
              >
                Collapsible Group Item #1
              </button>
            </h2>
          </div>
          {activeIndex === 1 && (
            <div id="collapseOne" className="collapse show" style={myStyle}>
              <div className="card-body">
                Anim pariatur cliche Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil ipsam, tempore aut magni dignissimos similique velit, facere voluptatum enim cum inventore. Expedita labore facere rerum error earum mollitia necessitatibus? reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <div className="card-header" style={myStyle} id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                style={myStyle}
                onClick={() => toggleAccordion(2)} // Toggle second accordion
              >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          {activeIndex === 2 && (
            <div id="collapseTwo" className="collapse show" style={myStyle}>
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, doloribus culpa? Aliquam, odit! Ad voluptates quidem quasi aut eos voluptate consectetur a dolores autem. Molestias nostrum sequi fuga eveniet esse. life accusamus terry richardson ad squid.
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <div className="card-header" style={myStyle} id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                style={myStyle}
                onClick={() => toggleAccordion(3)} // Toggle third accordion
              >
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          {activeIndex === 3 && (
            <div id="collapseThree" className="collapse show" style={myStyle}>
              <div className="card-body">
                Anim pariatur cliche reprehenderit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quibusdam inventore aliquam ex labore repellat facere ea tempore totam, et, quis asperiores ipsam corrupti. Rerum amet obcaecati eaque at blanditiis! enim eiusmod high life accusamus terry richardson ad squid.
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-dark">
          {btntext}
        </button>
      </div>
    </div>
  );
}
