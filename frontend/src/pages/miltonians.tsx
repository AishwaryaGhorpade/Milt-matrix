// // 'use client'
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function fetchUsers() {
//   return [
//     {
//       id: "1",
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       imageUrl: "/default-avatar.png",
//       position: "Developer",
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: "2",
//       firstName: "Jane",
//       lastName: "Smith",
//       email: "jane.smith@example.com",
//       imageUrl: "/default-avatar.png",
//       position: "Designer",
//       createdAt: new Date().toISOString(),
//     },
//   ];
// }


// function deleteUser(userId: string) {
//   console.log(`User with ID ${userId} deleted`);
// }

// export default function Miltonians() {
//   const navigate = useNavigate();
//   const users = fetchUsers();

//   return (
//     <div className="-m-1.5 overflow-auto w-full min-h-[30rem] my-10 mx-auto">
//       <div className="flex flex-col">
//         <div className="-m-1.5 overflow-x-auto">
//           <div className="p-1.5 min-w-full inline-block align-middle">
//             <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
//               <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
//                     Miltonians
//                   </h2>
//                   <p className="text-sm text-gray-600 dark:text-neutral-400">
//                     Add Miltonian, edit and more.
//                   </p>
//                 </div>

//                 <div>

//                   <button
//                     onClick={() => navigate("/addUser")}
//                     className="bg-white text-black rounded-sm border border-black-200 px-2 py-1 hover:bg-gray-100"
//                   >
//                     Add Miltonian
//                   </button>
//                 </div>
//               </div>

//               <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
//                 <thead className="bg-gray-50 dark:bg-neutral-800">
//                   <tr>
//                     <th scope="col" className="ps-6 py-3 text-start">
//                       <label htmlFor="hs-at-with-checkboxes-main" className="flex">
//                         <input
//                           type="checkbox"
//                           className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                           id="hs-at-with-checkboxes-main"
//                         />
//                         <span className="sr-only">Checkbox</span>
//                       </label>
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Name
//                     </th>
//                     <th scope="col" className="px-6 py-3 ">
//                       Position
//                     </th>
//                     <th scope="col" className="px-6 py-3 ">
//                       Created
//                     </th>
//                     <th scope="col" className="px-6 py-3 ">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
//                   {users.map((user) => (
//                     <tr key={user.id}>
//                       <td className="size-px whitespace-nowrap">
//                         <div className="ps-6 py-3">
//                           <label htmlFor={`checkbox-${user.id}`} className="flex">
//                             <input
//                               type="checkbox"
//                               className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                               id={`checkbox-${user.id}`}
//                             />
//                             <span className="sr-only">Checkbox</span>
//                           </label>
//                         </div>
//                       </td>
//                       <td className="size-px whitespace-nowrap">
//                         <div className="ps-6 lg:ps-3 xl:ps-2 pe-6 py-3">
//                           <div className="flex items-center gap-x-3 relative">
//                             <img
//                               className="inline-block size-[38px] rounded-full"
//                               src={user.imageUrl}
//                               alt="Avatar"
//                               width={38}
//                               height={38}
//                             />
//                             <div className="grow">
//                               <Link to={`./miltonians/profile/${user.id}`}>
//                                 <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
//                                   {user.firstName} {user.lastName}
//                                 </span>
//                               </Link>
//                               <span className="block text-sm text-gray-500 dark:text-neutral-500">
//                                 {user.email}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="h-px w-72 whitespace-nowrap">
//                         <div className="px-6 py-3">
//                           <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
//                             {user.position}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="size-px whitespace-nowrap">
//                         <div className="px-6 py-3">
//                           <span className="text-sm text-gray-500 dark:text-neutral-500">
//                             {new Date(user.createdAt).toLocaleDateString("en-US", {
//                               day: "numeric",
//                               month: "short",
//                               year: "numeric",
//                             })}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="size-px whitespace-nowrap">
//                         <div className="px-6 py-1.5 flex gap-2">
//                           <Link
//                             to={`./miltonians/edituser/${user.id}`}
//                             className="text-sm bg-blue-500 text-white rounded-lg px-2 py-1"
//                           >
//                             edit
//                           </Link>
//                           <button
//                             onClick={() => deleteUser(user.id)}
//                             className="text-sm dark:text-red-500 bg-red-500 text-white rounded-lg px-2 py-1"
//                           >
//                             delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState } from "react";
import CreateUserForm from "@/components/createUserForm";

function fetchUsers() {
  return [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      imageUrl: "/default-avatar.png",
      position: "Developer",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      imageUrl: "/default-avatar.png",
      position: "Designer",
      createdAt: new Date().toISOString(),
    },
  ];
}

function deleteUser(userId: string) {
  console.log(`User with ID ${userId} deleted`);
}

export default function Miltonians() {
  const users = fetchUsers();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <div className="-m-1.5 overflow-auto w-full min-h-[30rem] my-10 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto mx-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
              {/* Header Section */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Miltonians
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Add Miltonian, edit and more.
                  </p>
                </div>

                <div>
                  {/* Button to Open Modal */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-black rounded-sm border border-black-200 px-2 py-1 hover:bg-gray-100"
                  >
                    Add Miltonian
                  </button>
                </div>
              </div>

              {/* Table of Users */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800"
                          id="hs-at-with-checkboxes-main"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label>
                    </th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3 ">Position</th>
                    <th scope="col" className="px-6 py-3 ">Created</th>
                    <th scope="col" className="px-6 py-3 ">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 py-3">
                          <label htmlFor={`checkbox-${user.id}`} className="flex">
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800"
                              id={`checkbox-${user.id}`}
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 lg:ps-3 xl:ps-2 pe-6 py-3">
                          <div className="flex items-center gap-x-3 relative">
                            <img
                              className="inline-block size-[38px] rounded-full"
                              src={user.imageUrl}
                              alt="Avatar"
                              width={38}
                              height={38}
                            />
                            <div className="grow">
                              <Link to={`./miltonians/profile/${user.id}`}>
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  {user.firstName} {user.lastName}
                                </span>
                              </Link>
                              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                {user.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-72 whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            {user.position}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500 dark:text-neutral-500">
                            {new Date(user.createdAt).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5 flex gap-2">
                          <Link
                            to={`./miltonians/edituser/${user.id}`}
                            className="text-sm bg-blue-500 text-white rounded-lg px-2 py-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="text-sm bg-red-500 text-white rounded-lg px-2 py-1"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-10 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-lg p-6 w-[500px] shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
            <CreateUserForm />
          </div>
        </div>
      )}
    </div>
  );
}
