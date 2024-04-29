import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../ui/input";
import { Minus, Plus } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/Button";

const NewsHighlights = () => {
  const [news, setNews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSource, setSelectedSource] = useState("");

  const getAPI = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=36cbecce39fc43b3b7e8be41ab9f5ca0`;

    if (searchKeyword) {
      apiUrl += `&q=${encodeURIComponent(searchKeyword)}`;
    }

    if (selectedDate) {
      apiUrl += `&from=${selectedDate.toISOString().split("T")[0]}`;
    }

    if (selectedCategory) {
      apiUrl += `&category=${selectedCategory}`;
    }

    if (selectedSource) {
      apiUrl += `&sources=${selectedSource}`;
    }

    await fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setNews(response.articles);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getAPI();
  }, [searchKeyword, selectedDate, selectedCategory, selectedSource]);

  const [drawrdata, setDrawrData] = useState([]);

  return (
    <Drawer>
      <div className="flex gap-2 px-3">
        <div className="lg:max-w-[70%] w-full  lg:border-r pr-4  border-neutral-700">
          {/* Search and filtering section */}
          <div className=" flex m-3 gap-3">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select a date"
              className="border border-gray-300 px-3 py-3 rounded-md w-full mt-2"
            />{" "}
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="border text-white border-gray-300 px-3 py-2 rounded-md w-full"
            />
            {/* Add other input fields for filtering */}
          </div>
          {/* News articles section */}
          {news?.map((item, index) => (
            <>
              {item && item.description && item?.urlToImage && (
                <div className=" flex  w-full border-b border-neutral-500 py-6 ">
                  <div className="rounded-md flex flex-col-reverse  lg:flex-row  gap-4 ">
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${
                          index > 0
                            ? "text-xl lg:text-2xl text-neutral-300"
                            : " text-2xl lg:text-4xl text-neutral-200"
                        } font-semibold `}
                      >
                        {item?.title}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {item?.description}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {item?.author} | {item?.source.name}
                      </p>
                      <p className="text-xs font-semibold text-neutral-400">
                        Published {"on "}
                        {dayjs(item?.publishedAt).format("dddd, MMMM D, YYYY")}
                      </p>
                    </div>
                    {item?.urlToImage && (
                      <img
                        src={item?.urlToImage}
                        width={500}
                        height={600}
                        className="w-full lg:w-[500px] object-cover"
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="max-w-[30%] hidden lg:block pt-6 border-neutral-700">
          {/* Search and filtering section */}
          <div className="">
            {/* <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mt-2"
          />{" "}
          <Input
          type="text"
          placeholder="Search articles..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        /> */}
            {/* Add other input fields for filtering */}
          </div>
          {/* News articles section */}
          {news?.map((item, index) => (
            <DrawerTrigger onClick={() => setDrawrData(item)}>
              {item && item.description && item?.urlToImage && (
                <div className=" flex w-full border-b border-neutral-500 mb-4 pl-2">
                  <div className="rounded-md flex flex-col-reverse gap-2 ">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl text-neutral-200 noto-regular leading-6">
                        {item?.title}
                      </h3>
                      <p className="text-xs text-neutral-400 noto-regular">
                        {item?.description}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {item?.author} | {item?.source.name}
                      </p>
                      <p className="text-xs font-semibold text-neutral-400 pb-4">
                        Published {"on "}
                        {dayjs(item?.publishedAt).format("dddd, MMMM D, YYYY")}
                      </p>
                    </div>
                    {item?.urlToImage && (
                      <img src={item?.urlToImage} width={500} height={600} />
                    )}
                  </div>
                </div>
              )}
            </DrawerTrigger>
          ))}
        </div>

        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{drawrdata.title}</DrawerTitle>
              <DrawerDescription>{drawrdata.description} </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  {drawrdata?.urlToImage && (
                    <img src={drawrdata?.urlToImage} width={500} height={600} />
                  )}
                  <div className="text-[0.70rem] uppercase text-muted-foreground pt-2">
                    Published {"on "}
                    {dayjs(drawrdata?.publishedAt).format("dddd, MMMM D, YYYY")}
                  </div>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button>Read Article</Button>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </div>
    </Drawer>
  );
};

export default NewsHighlights;
