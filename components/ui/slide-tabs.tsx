import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // State to track the currently selected tab, defaulting to the first tab (index 0)
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<any[]>([]);

  // This effect runs when the component mounts or when the selected tab changes.
  // It calculates the position of the selected tab and sets the cursor.
  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);


  return (
    <ul
      onMouseLeave={() => {
        // When the mouse leaves the container, reset the cursor
        // to the position of the currently selected tab.
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
                left: selectedTab.offsetLeft,
                width,
                opacity: 1,
            });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
    >
      {["Home", "Pricing", "Features", "Docs", "Blog"].map((tab, i) => (
         <Tab
            key={tab}
            ref={(el: any) => (tabsRef.current[i] = el)}
            setPosition={setPosition}
            onClick={() => setSelected(i)}
          >
            {tab}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

// The Tab component is wrapped in forwardRef to accept a ref from its parent.
const Tab = React.forwardRef<any, any>(({ children, setPosition, onClick }, ref: any) => {
  const tabRef = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={(node) => {
        tabRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      onClick={onClick}
      onMouseEnter={() => {
        const currentRef = tabRef.current || (ref && "current" in ref ? ref.current : null);
        if (!currentRef) return;

        const { width } = currentRef.getBoundingClientRect();

        setPosition({
          left: currentRef.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
});

Tab.displayName = "Tab";

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};
