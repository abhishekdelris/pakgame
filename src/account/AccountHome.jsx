import React from "react";
import AccountHead from "./AccountHead";
import AccountSafe from "./AccountSafe";
import UserService from "./UserService";

const AccountHome = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color">
            <AccountHead />
            <AccountSafe />
            <UserService />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountHome;
