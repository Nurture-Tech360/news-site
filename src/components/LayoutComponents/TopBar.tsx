import React from "react";
import { Button } from "../ui/Button";
import dayjs from "dayjs";
import "dayjs/locale/en";
const TopBar = () => {
  const formattedDate = dayjs().locale("en").format("dddd, MMMM D, YYYY");
  return (
    <div className="flex w-full items-center justify-between container !px-0 py-2 border-b border-neutral-700 sticky ">
      <div className="text-neutral-200 font-medium text-sm flex items-center gap-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </div>
        Sections
      </div>
      <div className="text-neutral-400 pt-serif text-sm">{formattedDate}</div>

      <div className="flex gap-4 items-center">
        <p className="text-neutral-200 font-medium text-xs flex items-center gap-2">
          {" "}
          <svg
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_902)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8018 11.8339L9.65444 8.61786C10.4637 7.67274 10.9071 6.48358 10.9071 5.24561C10.9071 2.35323 8.51184 0 5.5678 0C2.62377 0 0.228516 2.35323 0.228516 5.24561C0.228516 8.138 2.62377 10.4912 5.5678 10.4912C6.67303 10.4912 7.72627 10.1637 8.62675 9.542L11.7981 12.7824C11.9306 12.9177 12.1089 12.9922 12.2999 12.9922C12.4808 12.9922 12.6523 12.9245 12.7826 12.8014C13.0593 12.5398 13.0681 12.106 12.8018 11.8339ZM5.5678 1.36842C7.74391 1.36842 9.51423 3.10768 9.51423 5.24561C9.51423 7.38354 7.74391 9.12281 5.5678 9.12281C3.39169 9.12281 1.62137 7.38354 1.62137 5.24561C1.62137 3.10768 3.39169 1.36842 5.5678 1.36842Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_902">
                <rect width={13} height={13} fill="white" />
              </clipPath>
            </defs>
          </svg>
          SEARCH
        </p>
        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default TopBar;
