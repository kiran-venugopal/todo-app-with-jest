import { render, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "./FollowersList";

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Kiran",
          last: "V",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        login: {
          uuid: "eerer",
          username: "kv",
        },
      },
    ],
  },
};

const mockResponseForMulitFollowers = {
  data: {
    results: [
      {
        name: {
          first: "Kiran",
          last: "V",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        login: {
          uuid: "eerer",
          username: "kv",
        },
      },
      {
        name: {
          first: "Bruce",
          last: "Wayne",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        login: {
          uuid: "abcdef",
          username: "bruce",
        },
      },
    ],
  },
};

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

jest.mock("axios");

describe("FollowersList", () => {
  it("should render follower element", async () => {
    axios.get = jest.fn(function (url) {
      if (url === "https://randomuser.me/api/?results=5") {
        return Promise.resolve(mockResponse);
      }
    });
    render(<MockFollowersList />);
    const followerElement = await screen.findByTestId("follower-item-0");
    expect(followerElement).not.toBeInTheDocument();
  });

  it("should render list of followers", async () => {
    axios.get = jest.fn(function (url) {
      if (url === "https://randomuser.me/api/?results=5") {
        return Promise.resolve(mockResponseForMulitFollowers);
      }
    });
    render(<MockFollowersList />);
    const followerElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerElement.length).toBe(
      mockResponseForMulitFollowers.data.results.length
    );
  });
});
