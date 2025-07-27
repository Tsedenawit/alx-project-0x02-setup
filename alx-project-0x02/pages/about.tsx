import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

import React from "react";
const About: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>My about page</h1>

      <div className="flex flex-col space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Button:</h2>

        <div className="flex space-x-4 items-center">
          <Button size="small" shape="rounded-sm">
            Small Square
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded
          </Button>
          <Button size="large" shape="rounded-full">
            Large Pill
          </Button>
        </div>

        <div className="mt-8">
          <Button
            size="large"
            shape="rounded-full"
            className="bg-green-500 hover:bg-green-600"
          >
            Custom Color
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
