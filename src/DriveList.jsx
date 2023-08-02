// // DriveList.js
// import React from 'react';
// import './DriveList.css';

// const DriveList = ({ drives }) => {
//   return (
//     <div className="drive-list">
//       {drives.map((drive, index) => (
//         <div className="drive-card" key={index}>
//           <h2>{drive.Company}</h2>
//           <p>Drive Code: {drive.driveCode}</p>
//           <p>Drive Date: {drive.driveDate}</p>
//           <p>Register By: {drive.RegisterBy}</p>
//           <p>Stream Eligible: {drive.StreamEligible}</p>
//           <p>Venue: {drive.Venue}</p>
//           <p>Job Profile: <a href={drive.JobProfile} target="_" >Open Profile</a></p>
//           <p>Status: {drive.Status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DriveList;
// DriveList.js
// import React, { useState } from 'react';
// import './DriveList.css';

// const DriveList = ({ drives }) => {
//   const [currentProfile, setCurrentProfile] = useState(drives[0].JobProfile);

//   const handleProfileClick = (index) => {
//     setCurrentProfile(drives[index].JobProfile);
//   };

//   return (
//     <div className="drive-container">
//       <div className="company-list">
//         {drives.map((drive, index) => (
//           <div className="company-item" key={index} onClick={() => handleProfileClick(index)}>
//             <h2>{drive.Company}</h2>
//             <p>Status: {drive.Status}</p>
//           </div>
//         ))}
//       </div>
//       <div className="drive-details">
//         <iframe src={currentProfile} title="Job Profile" />
//       </div>
//     </div>
//   );
// };

// export default DriveList;


// DriveList.js
// DriveList.js
import React, { useState } from 'react';
import './DriveList.css';

const DriveList = ({ drives }) => {
  const [currentProfile, setCurrentProfile] = useState(drives[0].JobProfile);

  const handleProfileClick = (index) => {
    setCurrentProfile(drives[index].JobProfile);
  };
  

  return (
    <div className="drive-container">
      <div className="drive-details">
        <iframe src={currentProfile} title="Job Profile" />
      </div>
      <div className="company-list">
        {drives.map((drive, index) => (
          <div className="company-item" key={index} onClick={() => handleProfileClick(index)}>
            <h2>{drive.Company}</h2>
            <p>Status: {drive.Status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveList;

