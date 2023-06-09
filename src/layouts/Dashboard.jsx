import React, { useContext } from 'react';
import { FaCommentAlt, FaHome, FaUserCheck, FaUserEdit, FaUserGraduate, FaUserTie, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { RiLogoutCircleLine } from 'react-icons/ri';
import Avatar from '../../public/avatar2.png'
import useCart from '../hook/useCart';
import { AiFillFileAdd } from 'react-icons/ai';

const Dashboard = () => {

    const [cart] = useCart()

    const isAdmin = true
    const isInstructor = true

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out Successful')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className=''>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#F2F2F2] shadow-md">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 text-md font-bold h-full bg-base-200 text-base-content">




                        {
                            isAdmin ?
                                <>
                                    <h1 className="text-2xl bg-[#55d6af] font-bold text-center py-4"> Admin Dashboard</h1>
                                    <div className='text-center mt-5'>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-green-100 ring-offset-[#55d6af] ring-offset-2">
                                                <img src={user && user.photoURL ? user.photoURL : Avatar} />
                                            </div>
                                        </div>
                                        <p className='mt-2 font-bold'>{user?.displayName} </p>

                                        <div className='mt-2'>
                                            <button onClick={handleLogOut} className='btn btn-sm btn-outline btn-success'>
                                                <Link><RiLogoutCircleLine className='text-xl font-bold '></RiLogoutCircleLine></Link>
                                            </button>
                                        </div>



                                    </div>

                                    <div className="divider"></div>
                                    <li className='my-2 '><NavLink to='/dashboard/adminmanageClass'><FaUserEdit ></FaUserEdit>Manage Classes</NavLink></li>
                                    <li className='my-2'><NavLink to='/dashboard/adminmanageUser'><FaUserCheck></FaUserCheck>Manage Users</NavLink></li>



                                </>
                                : isInstructor ?
                                    <>


                                        <h1 className="text-2xl bg-[#55d6af] font-bold text-center py-4"> Instructor Dashboard</h1>
                                        <div className='text-center mt-5'>
                                            <div className="avatar">
                                                <div className="w-24 rounded-full ring ring-green-100 ring-offset-[#55d6af] ring-offset-2">
                                                    <img src={user && user.photoURL ? user.photoURL : Avatar} />
                                                </div>
                                            </div>
                                            <p className='mt-2 font-bold'>{user?.displayName} </p>

                                            <div className='mt-2'>
                                                <button onClick={handleLogOut} className='btn btn-sm btn-outline btn-success'>
                                                    <Link><RiLogoutCircleLine className='text-xl font-bold '></RiLogoutCircleLine></Link>
                                                </button>
                                            </div>



                                        </div>

                                        <div className="divider"></div>
                                        <li className='my-2 '><NavLink to='/dashboard/addClasses'><AiFillFileAdd ></AiFillFileAdd>Add Classes</NavLink></li>
                                        <li className='my-2'><NavLink to='/dashboard/manageClasses'><FaUsers></FaUsers>My Classes</NavLink></li>


                                    </>
                                    :

                                    <>
                                        <h1 className="text-2xl bg-[#55d6af] font-bold text-center py-4"> User Dashboard</h1>
                                        <div className='text-center mt-5'>
                                            <div className="avatar">
                                                <div className="w-24 rounded-full ring ring-green-100 ring-offset-[#55d6af] ring-offset-2">
                                                    <img src={user && user.photoURL ? user.photoURL : Avatar} />
                                                </div>
                                            </div>
                                            <p className='mt-2 font-bold'>{user?.displayName} </p>

                                            <div className='mt-2'>
                                                <button onClick={handleLogOut} className='btn btn-sm btn-outline btn-success'>
                                                    <Link><RiLogoutCircleLine className='text-xl font-bold '></RiLogoutCircleLine></Link>
                                                </button>
                                            </div>



                                        </div>

                                        <div className="divider"></div>
                                        <li className='my-2 '><NavLink to='/dashboard/mycart'><FaUserEdit ></FaUserEdit>Selected Classes</NavLink></li>
                                        <li className='my-2'><NavLink to='/dashboard/enrolledClass'><FaUserCheck></FaUserCheck>Enrolled Classes</NavLink></li>
                                        <li className='my-2'><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                                    </>
                        }


                        <div className="divider"></div>

                        <li className='my-2'><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li className='my-2'><NavLink to='/allClasses'><FaUserGraduate></FaUserGraduate>All Classes</NavLink></li>
                        <li className='my-2'><NavLink to='/instructors'><FaUserTie></FaUserTie>Instructor</NavLink></li>
                        <li className='my-2'><NavLink to='/instructors'><FaCommentAlt></FaCommentAlt>Contact</NavLink></li>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;