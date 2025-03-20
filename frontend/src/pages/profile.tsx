// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// export default function ProfilePage() {
//     const { userId } = useParams(); // Get userId from URL
//     const [userProfile, setUserProfile] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!userId) {
//             console.error("❌ userId is undefined!");
//             setLoading(false);
//             return;
//         }

//         async function fetchUserProfile() {
//             console.log(`Fetching user profile for ID: ${userId}`);
//             try {
//                 const response = await fetch(`http://localhost:5000/api/users/${userId}`);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = await response.json();
//                 console.log("✅ Fetched data:", data);
//                 setUserProfile(data);
//             } catch (error) {
//                 console.error("❌ Error fetching user:", error);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchUserProfile();
//     }, [userId]);

//     if (loading) {
//         return <div>Loading user profile...</div>;
//     }

//     if (!userProfile) {
//         return <div>User not found</div>;
//     }

//     return (
//         <div className="max-w-lg w-full sm:p-4">
//             <Link to="/miltonians" className="inline-flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-800">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back to Miltonians
//             </Link>

//             <div className="space-y-4 mb-4 flex gap-2 items-center">
//                 <div className="z-10 size-12 flex justify-center items-center">
//                     <img
//                         className="shrink-0 size-12 rounded-full"
//                         src={userProfile.imgUrl}
//                         width={38}
//                         height={38}
//                         alt="Avatar"
//                     />
//                 </div>
//                 <div className="w-full">
//                     <div className="flex justify-between w-full items-center">
//                         <h1 className="font-medium">{userProfile.firstName} {userProfile.lastName}</h1>
//                         <Link to={`/timeline/${userId}`} className="text-xs border border-gray-500 px-4 py-2 rounded-lg">
//                             Timeline
//                         </Link>
//                     </div>
//                     <span className="block text-sm text-gray-500">{userProfile.emailAddress}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }


