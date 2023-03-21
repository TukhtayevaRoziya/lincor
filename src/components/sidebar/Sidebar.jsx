import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

import logo from "../../assets/logo.svg";

import styles from "./Sidebar.module.css";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Students from "../students/Students";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  // const data = useSelector((state) => state.sidebarReducer);
  let date = new Date();

  const data = [
    {
      id: 1,
      path: "",
      label: "Dashboard",
      icon: AiOutlineHome,
    },
    {
      id: 2,
      path: "students",
      label: "O’quvchilar",
      icon: FaGraduationCap,
    },
    {
      id: 3,
      path: "teachers",
      label: "Teachers",
      icon: GiTeacher,
    },
    {
      id: 4,
      path: "events",
      label: "Events",
      icon: MdDateRange,
    },
    {
      id: 5,
      path: "contact",
      label: "Contact",
      icon: TiMessages,
    },
  ];
  const win = window.location.pathname;
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const dataMap = data.map((d) => ({
    key: String(d.id),
    icon: React.createElement(d.icon),
    label: <NavLink to={"/dashboard/" + d.path}>{d.label}</NavLink>,
  }));
  return (
    <Layout className={styles.mainWrap}>
      <Sider
        style={{ grid: "n1" }}
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          if (collapsed) {
            document.getElementById("main")?.classList.remove("dark");
          } else {
            document.getElementById("main")?.classList.add("dark");
          }
        }}
      >
        <div className="logo">
          <img src={logo} alt="" className={styles.logo}>
            {/* <span>A</span>
            Akademi */}
          </img>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[
            win === "/dashboard/students/:id"
              ? "2"
              : win === "/dashboard/teachers/*"
              ? "3"
              : win === "/dashboard/events/*"
              ? "4"
              : win === "/dashboard/contact/*"
              ? "5"
              : "1",
          ]}
          items={dataMap}
        />
      </Sider>
      <Layout style={{ gridArea: "c", width: "calc(100% - 1px)" }}>
        <div>
          <Header
            className={"site-layout-sub-header-background " + styles.header}
            style={{ padding: 0, width: "calc(100% - 1px)" }}
          >
            <h1 className={styles.title}>Xisobot</h1>
            <p>
              {String(day).length === 1 ? "0" + day : day}.
              {String(month).length === 1 ? "0" + month : month}.
              {date.getFullYear()}
            </p>
            <div className={styles.end_section_ofHeader}>
              <div className={styles.end_section_ofHeader_icons}>
                <IoLogOutOutline />
              </div>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background "
              id="main"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/contact" element={<Contact />} />
                <Route path="/dashboard/students" element={<Students />} />
                {/* <Route path="/settings" element={<Settings />} />
                <Route path="/students/*" element={<AllStudents />} />
                <Route path="/students/add" element={<AddStudents />} />
                <Route path="/teachers/add" element={<AddTeacher />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/teachers/:id" element={<TeacherSingle />} /> */}
              </Routes>
            </div>
          </Content>
        </div>
      </Layout>
      {/* <RightAdminNavbar /> */}
    </Layout>
  );
};

export default Sidebar;
