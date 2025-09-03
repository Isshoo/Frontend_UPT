import React from "react";

type Props = {};

export async function generateMetadata() {
  return {
    title: "Dashboard",
  };
}

const page = (props: Props) => {
  return <div>Admin Dashboard Page</div>;
};

export default page;
