import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const episodes = {
  data: [
      {
        airdate: "2019-07-04",
        ​​​
        airstamp: "2019-07-04T12:00:00+00:00",
        ​​​
        airtime: "",
        ​​​
        id: 1576469,
        ​​​
        image: { medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg", 
        original: "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg" },
        ​​​
        name: "Chapter One: Suzie, Do You Copy?",
        ​​​
        number: 1,
        ​​​
        runtime: 51,
        ​​​
        season: 3,
        ​​​
        summary: "<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>",
        ​​​
        url: "http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy"
  },
  {
    airdate: "2019-07-04",
    ​​​
    airstamp: "2019-07-04T12:00:00+00:00",
    ​​​
    airtime: "",
    ​​​
    id: 1576470,
    ​​​
    image: { medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg", 
    original: "http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg" },
    ​​​
    name: "Chapter Two: The Mall Rats",
    ​​​
    number: 2,
    ​​​
    runtime: 50,
    ​​​
    season: 3,
    ​​​
    summary: "<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>",
    ​​​
    url: "http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats"
  }
],
};

test("App can render", () => {
  render(<App />);
});

test("Dropdown works", async () => {
    mockFetchShow.mockResolvedValueOnce(episodes);

    const {getByText, }
});
