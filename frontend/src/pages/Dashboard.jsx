import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChatAlt2, HiOutlineBell, HiOutlineLogout, HiOutlineUser, HiOutlinePhone, HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineWorkOutline, MdOutlineSettings, MdClose, MdCheck } from "react-icons/md";
import { doc, updateDoc } from "firebase/firestore";

const Dashboard = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData?.name || currentUser?.displayName || "",
    mobile: userData?.mobile || ""
  });
  const [updateStatus, setUpdateStatus] = useState("idle"); // idle, updating, success

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || currentUser?.displayName || "",
        mobile: userData.mobile || ""
      });
    }
  }, [userData, currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdateStatus("updating");
    try {
      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          name: formData.name,
          mobile: formData.mobile,
          lastUpdated: new Date().toISOString()
        });
        setUpdateStatus("success");
        setTimeout(() => {
          setIsEditing(false);
          setUpdateStatus("idle");
        }, 1500);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setUpdateStatus("error");
    }
  };

  const displayName = userData?.name || currentUser?.displayName || currentUser?.email?.split("@")[0] || "User";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-end items-center gap-6 mb-8 px-4">
          <button className="text-gray-500 hover:text-black transition-colors relative group">
            <HiOutlineChatAlt2 className="text-2xl" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <button className="text-gray-500 hover:text-black transition-colors relative group">
            <HiOutlineBell className="text-2xl" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold relative cursor-pointer">
            {initial}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
        </div>

        {/* Dashboard Content - Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-10 overflow-hidden relative"
        >
          {/* BACKGROUND DECORATION */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Large Avatar */}
            <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center text-white text-4xl font-bold relative mb-6 shadow-lg shadow-teal-600/20">
              {initial}
              <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-4 border-white rounded-full"></span>
            </div>

            <AnimatePresence mode="wait">
              {!isEditing ? (
                <motion.div
                  key="view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                    {displayName.toLowerCase()}
                  </h2>
                  <p className="text-gray-500 text-sm mb-10">{currentUser?.email}</p>

                  <div className="w-full space-y-2">
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="w-full flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-2xl transition-all group"
                    >
                      <HiOutlinePencilAlt className="text-2xl text-gray-400 group-hover:text-teal-600" />
                      <span className="text-lg font-medium">Edit Profile</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-50 rounded-2xl transition-all group">
                      <MdOutlineWorkOutline className="text-2xl text-gray-400 group-hover:text-black" />
                      <span className="text-lg font-medium">Project Briefs</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-gray-50 rounded-2xl transition-all group">
                      <MdOutlineSettings className="text-2xl text-gray-400 group-hover:text-black" />
                      <span className="text-lg font-medium">Settings</span>
                    </button>

                    <div className="h-[1px] bg-gray-100 my-4 mx-2"></div>

                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-4 px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-2xl transition-all group"
                    >
                      <HiOutlineLogout className="text-2xl text-gray-400 group-hover:text-red-500" />
                      <span className="text-lg font-medium">Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="edit"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleUpdateProfile}
                  className="w-full space-y-4"
                >
                  <div className="relative">
                    <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                      <MdClose /> Cancel
                    </button>
                    <button 
                      type="submit"
                      disabled={updateStatus === "updating"}
                      className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2"
                    >
                      {updateStatus === "updating" ? "..." : <><MdCheck /> Save</>}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;