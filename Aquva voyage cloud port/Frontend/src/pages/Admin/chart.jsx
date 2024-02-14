import { Link } from 'react-router-dom';
//import './dashboard.css';
const Dashch=()=>{
  return(
    <div>
        {/* <meta scharSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,200,0,0" />
        
        <div className="main">
          <div className="menu">
            <div className="menu_part1">
              <div id="storepic" />
              <div id="storedetails">
                <div id="storename">Admin</div>
                
              </div>
              
            </div>
            <div className="menu_part2">
              <div className="menu_options1 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px', fontWeight: 300}} className="material-symbols-outlined">
                    home
                  </span></div>
                  <div className="menu_option_name"><Link to={'/ad'}>Home</Link></div>
              </div>
              <div className="menu_options2 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    assignment
                  </span></div>
                <div className="menu_option_name"><Link to={'/au'}>Admin Profile</Link></div>
              </div>
              <div className="menu_options3 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    grid_view
                  </span></div>
                <div className="menu_option_name"><Link to={'/post'}>Post boat details</Link></div>
              </div>
              
              <div className="menu_options5 menu_options">
               
              </div>
              <div className="menu_options6 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    leaderboard
                  </span></div>
                <div className="menu_option_name"><Link to={'/edit'}>Edit</Link></div>
              </div>
              <div className="menu_options7 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    payments
                  </span>
                </div>
                <div className="menu_option_name"><Link to={'/view'}>View All Boats</Link></div>
              </div>
              <div className="menu_options8 menu_options">
                
                <div className="menu_option_name"></div>
              </div>
              <div className="menu_options9 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    percent
                  </span>
                </div>
                <div className="menu_option_name">Discounts</div>
              </div>
              <div className="menu_options10 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    group
                  </span></div>
                <div className="menu_option_name">Customer</div>
              </div>
              <div className="menu_options11 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    palette
                  </span></div>
                <div className="menu_option_name">Chart</div>
              </div>
             
            </div>
          </div>
          <div className="containero">
            
            <div className='newd'>
            <div className="content">
              <div className="content1">
              <div className="content1_1" style={{ color: 'white' }}>Overview</div>

                <div className="content1_2">
                <div>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        svg {
          font-size: 0.7rem;
        }

        circle {
          animation: progress 2.5s ease-in-out infinite;
          stroke-dasharray: 377;
          stroke-dashoffset: 40;
          transform-origin: center;
          transform: rotate(-110deg);
        }

        .background {
          stroke-dashoffset: 0;
          stroke: hsl(0, 0%, 90%);
        }

        text {
          fill: hsl(0, 0%, 30%);
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .content {}

        .graph-color {
          stroke: url(#MyGradient);
          animation: fill 3s ease forwards;
        }

        @keyframes fill {
          from {
            stroke-dashoffset: 377;
          }
          to {
            stroke-dashoffset: 40;
          }
        }

        svg:nth-of-type(2) .graph-color {
          stroke: purple;
          animation: fill-two 3s ease forwards;
        }

        @keyframes fill-two {
          from {
            stroke-dashoffset: 377;
          }
          to {
            stroke-dashoffset: 189;
          }
        }
      `}</style>

      <svg width={200} height={200}>
        <text className="title" x="50%" y="50%" textAnchor="middle">
          90%
        </text>
        <text className="content" x="50%" y="57%" textAnchor="middle">
          Total PCP
        </text>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="#36e0cd" />
            <stop offset="90%" stopColor="#7c36e0" />
          </linearGradient>
        </defs>
        <circle
          className="background"
          r={60}
          cy="50%"
          cx="50%"
          strokeLinejoin="round"
          strokeWidth={15}
          fill="none"
        />
        <circle
          className="graph-color"
          r={60}
          cy="50%"
          cx="50%"
          strokeLinejoin="round"
          strokeWidth={15}
          fill="none"
        />
      </svg>

      <svg width={200} height={200}>
        <text className="title" x="50%" y="50%" textAnchor="middle">
          50%
        </text>
        <text className="content" x="50%" y="57%" textAnchor="middle">
          Total PCP
        </text>
        <circle
          className="background"
          r={60}
          cy="50%"
          cx="50%"
          strokeLinejoin="round"
          strokeWidth={5}
          fill="none"
        />
        <circle
          className="graph-color"
          r={60}
          cy="50%"
          cx="50%"
          strokeLinejoin="round"
          strokeWidth={15}
          fill="none"
        />
      </svg>
    </div>
                  
                  
                </div>
              </div>
             
          </div>
        </div>
      </div> 
      </div>
      </div>
  )
}
export default Dashch
