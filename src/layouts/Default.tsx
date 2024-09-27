/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import { useDispatch } from "react-redux";
import { setInquiries } from "../store/inquirySlice";
import { getInquiries } from "../api/inquiries";

const DefaultLayout: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    document.getElementById("backdrop")?.classList.toggle("hidden");
  };

  const fetchInquiries = useCallback(async () => {
    try {
      const { data } = await getInquiries();
      dispatch(setInquiries(data));
    } catch (error) {
      navigate("/error");
    } finally {
      setLoading(false);
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  return (
    <div className="flex h-screen bg-slate-50 font-montserrat">
      <Sidebar toggleSidebar={toggleSidebar} />

      <main className="w-auto flex-1 overflow-y-auto p-8">
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="mt-16">
          {loading ? (
            <p className="text-sm font-medium text-slate-600">Loading...</p>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
