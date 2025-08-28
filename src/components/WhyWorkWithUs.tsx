// import React from "react";
// import "./WhyWorkWithUs.css";
// import summitImg from "../assets/summit-partner.png";
// import extensiveImg from "../assets/extensive.svg";
// import supportImg from "../assets/support-icon-1.svg";
// import qualityImg from "../assets/quality-sales.svg";

// const WhyWorkWithUs = () => {
//   return (
//     <div className="container why-container">
//       <h2 className="swhy-ksolves-title">Why Work With Ksolves?</h2>
      
//       <div className="row">
//         {/* Left side */}
//         <div className="col-lg-7 col-md-12 col-12">
//           <div className="row px-0">
//             {/* Salesforce Summit Partner */}
//             <div className="col-lg-5 col-md-6 col-12 pe-lg-1">
//               <div className="card-box bg-spaid">
//                 <div className="icon-wrap">
//                   <img src={summitImg} alt="Summit Partner" />
//                 </div>
//                 <div className="text-wrap">
//                   <h4>Salesforce Summit <br /> Consulting Partner</h4>
//                   <p>Your Top-Tier Partner for Your Success</p>
//                 </div>
//               </div>
//             </div>

//             {/* Extensive Salesforce Expertise + Years of Experience */}
//             <div className="col-lg-7 col-md-6 col-12">
//               <div className="card-box spaid-extensive">
//                 <div className="icon-wrap">
//                   <img src={extensiveImg} alt="Extensive Expertise" />
//                 </div>
//                 <div className="text-wrap">
//                   <h4>Extensive Salesforce Expertise</h4>
//                   <p><b>100+</b> Salesforce experts</p>
//                   <p><b>300+</b> Salesforce certifications</p>
//                 </div>
//               </div>

//               <div className="card-box spaid-industry">
//                 <div className="icon-wrap number">12+</div>
//                 <div className="text-wrap">
//                   <h4>Years of Industry Expertise</h4>
//                   <p>Help businesses to grow, enhance customer experiences, and boost ROI.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="col-lg-5 col-md-12 col-12">
//           <div className="row">
//             <div className="col-lg-7 col-6">
//               <div className="card-box spaid-business">
//                 <div className="icon-wrap number">89.3%</div>
//                 <div className="text-wrap">
//                   <h4>Repeat Business Rate</h4>
//                   <p>Unmatched Salesforce expertise and customer satisfaction.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-5 col-6">
//               <div className="card-box spaid-retention">
//                 <div className="icon-wrap number">90%</div>
//                 <div className="text-wrap">
//                   <h4>Client retention rate</h4>
//                   <p>Highlighting our exceptional Salesforce service.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-12">
//               <div className="card-box spaid-ongoing">
//                 <div className="icon-wrap">
//                   <img src={supportImg} alt="Ongoing Support" />
//                 </div>
//                 <div className="text-wrap">
//                   <h4>Ongoing support & Maintenance</h4>
//                   <p>Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  

//       {/* Bottom row */}
//       <div className="row mt-3">
//         <div className="col-lg-3 col-md-6 col-12">
//           <div className="card-box spaid-global">
//             <div className="icon-wrap number">100%</div>
//             <div className="text-wrap">
//               <h4>Global Salesforce Support</h4>
//               <p>Cover all time zones to support and collaborate across geographies.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-6 col-12">
//           <div className="card-box spaid-code">
//             <div className="icon-wrap number">100%</div>
//             <div className="text-wrap">
//               <h4>In-house code development</h4>
//               <p>Reduce the risks associated with third-party code.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-6 col-12">
//           <div className="card-box spaid-delivery">
//             <div className="icon-wrap number">99%</div>
//             <div className="text-wrap">
//               <h4>On-Time Project Delivery</h4>
//               <p>Use AI-powered tools to ensure on-time project delivery.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-6 col-12">
//           <div className="card-box spaid-assurance">
//             <div className="icon-wrap">
//               <img src={qualityImg} alt="Quality Assurance" />
//             </div>
//             <div className="text-wrap">
//               <h4>Quality assurance</h4>
//               <p>Conduct in-house development and testing for reliable, efficient Salesforce solutions.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default WhyWorkWithUs;









import React from "react";
import "./WhyWorkWithUs.css";

const WhyWorkWithUs = () => {
  return (
    <div className="container why-container">
      <h2 className="swhy-ksolves-title">Why Work With Ksolves?</h2>
      
      <div className="row">
        {/* Left side */}
        <div className="col-lg-7 col-md-12 col-12">
          <div className="row px-0">
            {/* Salesforce Summit Partner */}
            <div className="col-lg-5 col-md-6 col-12 pe-lg-1">
              <div className="card-box bg-spaid">
                <div className="icon-wrap">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968914.png" 
                    alt="Summit Partner" 
                  />
                </div>
                <div className="text-wrap">
                  <h4>Salesforce Summit <br /> Consulting Partner</h4>
                  <p>Your Top-Tier Partner for Your Success</p>
                </div>
              </div>
            </div>

            {/* Extensive Salesforce Expertise + Years of Experience */}
            <div className="col-lg-7 col-md-6 col-12">
              <div className="card-box spaid-extensive">
                <div className="icon-wrap">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" 
                    alt="Extensive Expertise" 
                  />
                </div>
                <div className="text-wrap">
                  <h4>Extensive Salesforce Expertise</h4>
                  <p><b>100+</b> Salesforce experts</p>
                  <p><b>300+</b> Salesforce certifications</p>
                </div>
              </div>

              <div className="card-box spaid-industry">
                <div className="icon-wrap number">12+</div>
                <div className="text-wrap">
                  <h4>Years of Industry Expertise</h4>
                  <p>Help businesses to grow, enhance customer experiences, and boost ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="col-lg-5 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-7 col-6">
              <div className="card-box spaid-business">
                <div className="icon-wrap number">89.3%</div>
                <div className="text-wrap">
                  <h4>Repeat Business Rate</h4>
                  <p>Unmatched Salesforce expertise and customer satisfaction.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-6">
              <div className="card-box spaid-retention">
                <div className="icon-wrap number">90%</div>
                <div className="text-wrap">
                  <h4>Client retention rate</h4>
                  <p>Highlighting our exceptional Salesforce service.</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card-box spaid-ongoing">
                <div className="icon-wrap">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1827/1827301.png" 
                    alt="Ongoing Support" 
                  />
                </div>
                <div className="text-wrap">
                  <h4>Ongoing support & Maintenance</h4>
                  <p>Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      {/* Bottom row */}
      <div className="row mt-3">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-box spaid-global">
            <div className="icon-wrap number">100%</div>
            <div className="text-wrap">
              <h4>Global Salesforce Support</h4>
              <p>Cover all time zones to support and collaborate across geographies.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-box spaid-code">
            <div className="icon-wrap number">100%</div>
            <div className="text-wrap">
              <h4>In-house code development</h4>
              <p>Reduce the risks associated with third-party code.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-box spaid-delivery">
            <div className="icon-wrap number">99%</div>
            <div className="text-wrap">
              <h4>On-Time Project Delivery</h4>
              <p>Use AI-powered tools to ensure on-time project delivery.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-box spaid-assurance">
            <div className="icon-wrap">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
                alt="Quality Assurance" 
              />
            </div>
            <div className="text-wrap">
              <h4>Quality assurance</h4>
              <p>Conduct in-house development and testing for reliable, efficient Salesforce solutions.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhyWorkWithUs;
