import { Link } from 'react-router-dom';
import './dashboard.css';
const Dashboard=()=>{
  return(
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,200,0,0" />
        <title>Dukaan Payouts V2</title>
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
                <div className="menu_option_name">Home</div>
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
                <div className="menu_option_name">FAQ</div>
              </div>
              
              <div className="menu_options5 menu_options">
               
              </div>
              <div className="menu_options6 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    leaderboard
                  </span></div>
                <div className="menu_option_name">Analytics</div>
              </div>
              <div className="menu_options7 menu_options">
                <div className="menu_option_icon"><span style={{fontSize: '25px'}} className="material-symbols-outlined">
                    payments
                  </span>
                </div>
                <div className="menu_option_name">Payments</div>
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
                <div className="menu_option_name">Appearance</div>
              </div>
              <div className="menu_options12 menu_options">
                
              </div>
            </div>
            <div className="menu_part3">
              <div className="credit_icon"><span style={{fontSize: '30px'}} className="material-symbols-outlined">
                  account_balance_wallet
                </span></div>
              <div className="credit_text">
                <div className="credit_text1">Available Credits</div>
                <div className="credit_text2">222.10</div>
              </div>
            </div>
          </div>
          <div className="containero">
            <div className="navbaro">
              <div className="navbar1">
                <div className="navbar1_howitworks"><span style={{fontSize: '20px'}} className="material-symbols-outlined">
                   
                  </span>
                </div>
              </div>
              <div className="navbar2">
                
              
              </div>
              
                 
            </div>
            <div className="content">
              <div className="content1">
                <div className="content1_1">Overview</div>
                <div className="content1_2">
                  <select name id="content1_2_select">
                   
                  </select>
                  
                </div>
              </div>
              <div className="content2">
                <div className="online_orders shadow">
                  <div className="online_orders_1">Online Bookings</div>
                  <div className="online_orders_2">232</div>
                </div>
                <div className="amount_recieved shadow">
                  <div className="amount_recieved_1">Amount recieved</div>
                  <div className="amount_recieved_2"> ₹1,92,312.19</div>
                </div>
              </div>
              <div className="content3">
                Transactions | This month
              </div>
              <div className="shadowforlastbox">
                <div className="content4">
                  <div className="content4_1">
                    <div className="content4_1_searchicon">
                      <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#848484" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <div><input type="text" placeholder="Search by order ID..." name id="navbar4_1_input" />
                    </div>
                  </div>
                  <div className="content4_2">
                    <div className="content4_2_sort">
                      <div className="content4_2_sort_1">Sort</div>
                      <div className="content4_2_sort_2"><span className="material-symbols-outlined">
                          swap_vert
                        </span></div>
                    </div>
                    <div className="content4_2_download"><span className="material-symbols-outlined">
                        download
                      </span></div>
                  </div>
                </div>
                <div className="content5">
                  <table>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Booking Date</th>
                        <th>Total amount</th>
                        <th>Transaction fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                      <tr>
                        <td>#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1,278.23</td>
                        <td>₹22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="content6">
                  <div className="content6_1">
                    <div className="content6_1_1"><span className="material-symbols-outlined">
                        chevron_left
                      </span></div>
                    <div className="content6_1_2">Previous</div>
                  </div>
                  <div className="content6_2">
                    <div className="content6_2_1 pageno">1</div>
                    <div className="content6_2_2 pageno">...</div>
                    <div className="content6_2_3 pageno">10</div>
                    <div className="content6_2_4 pageno">11</div>
                    <div className="content6_2_5 pageno">12</div>
                    <div className="content6_2_6 pageno">13</div>
                    <div className="content6_2_7 pageno">14</div>
                    <div className="content6_2_8 pageno">15</div>
                    <div className="content6_2_9 pageno">16</div>
                    <div className="content6_2_10 pageno">17</div>
                  </div>
                  <div className="content6_3">
                    <div className="content6_3_1">Next</div>
                    <div className="content6_3_2"><span className="material-symbols-outlined">
                        chevron_right
                      </span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Dashboard