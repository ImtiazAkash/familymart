import React from "react";
import Class from "../../styles/Dashboard.module.css";
import { AiFillShopping } from "react-icons/ai";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";

function Dashboard() {
  return (
    <div className={Class.container}>
      <div className={Class.statistics}>
        <div className={Class.sales}>
          <FaDollarSign
            style={{
              width: "2.3rem",
              height: "2.3rem",
              backgroundColor: "#F1A54B",
              color: "white",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
          <div>
            <span style={{ color: "#c4c4c4" }}>Total Sales</span>
            <span style={{ fontWeight: "bold" }}>$465,454</span>
          </div>
        </div>
        <div className={Class.orders}>
          <FaShoppingCart
            style={{
              width: "2.3rem",
              height: "2.3rem",
              backgroundColor: "#08B21C",
              color: "white",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
          <div>
            <span style={{ color: "#c4c4c4" }}>Total Orders</span>
            <span style={{ fontWeight: "bold" }}>4654</span>
          </div>
        </div>
        <div className={Class.products}>
          <AiFillShopping
            style={{
              width: "2.3rem",
              height: "2.3rem",
              backgroundColor: "#3569E9",
              color: "white",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
          <div>
            <span style={{ color: "#c4c4c4" }}>Total Products</span>
            <span style={{ fontWeight: "bold" }}>4654</span>
          </div>
        </div>
      </div>

      <div className={Class.ordersTable}>
        <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>Recent Orders</h4>
        <div className={Class.tableScroll}>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            <tr>
              <td style={{color: "#979797"}}>2323</td>
              <td style={{fontWeight: "bold"}}>John Smith</td>
              <td style={{color: "#979797"}}>john@gmail.com</td>
              <td style={{color: "#979797"}}>$569</td>
              <td style={{color: "#979797"}}>Delivered</td>
              <td style={{color: "#979797"}}>07.05.2022</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
