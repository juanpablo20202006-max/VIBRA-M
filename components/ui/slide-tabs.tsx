import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface TabItem {
  label: string;
  href?: string;
  target?: string;
}

export interface SlideTabsProps {
  items?: (string | TabItem)[];
  defaultIndex?: number;
  onTabChange?: (tab: string | TabItem, index: number) => void;
  className?: string;
  violetColor?: string;
}

const DEFAULT_TABS = ["Home", "Pricing", "Features", "Docs", "Blog"];

export const SlideTabs: React.FC<SlideTabsProps> = ({
  items = DEFAULT_TABS,
  defaultIndex = 0,
  onTabChange,
  className = "",
  violetColor = "#D81B60",
}) => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const [selected, setSelected] = useState(defaultIndex);
  const [hovered, setHovered] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Sincronizar si cambia defaultIndex externamente
  useEffect(() => {
    setSelected(defaultIndex);
  }, [defaultIndex]);

  // Reposicionar el cursor a la pestaña actualmente seleccionada
  const updateToSelected = () => {
    setHovered(null);
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width, height } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        top: selectedTab.offsetTop,
        width,
        height,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updateToSelected();
  }, [selected, items]);

  // Recalcular dimensiones al redimensionar la ventana o cargar fuentes
  useEffect(() => {
    const handleResize = () => {
      const activeIdx = hovered !== null ? hovered : selected;
      const tab = tabsRef.current[activeIdx];
      if (tab) {
        const { width, height } = tab.getBoundingClientRect();
        setPosition({
          left: tab.offsetLeft,
          top: tab.offsetTop,
          width,
          height,
          opacity: 1,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [selected, hovered]);

  // Estado del color del cursor
  const isViolet = hovered === null || hovered === selected;

  return (
    <ul
      onMouseLeave={updateToSelected}
      className={`relative mx-auto flex w-fit items-center gap-1 md:gap-1.5 rounded-full border border-neutral-200/90 bg-neutral-50/90 p-1 md:p-1.5 shadow-xs backdrop-blur-sm ${className}`}
      style={{ backgroundColor: "rgba(250, 250, 250, 0.90)" }}
    >
      {items.map((tab, i) => {
        const label = typeof tab === "string" ? tab : tab.label;
        const href = typeof tab === "object" ? tab.href : undefined;
        const isSelected = selected === i;
        const isHovered = hovered === i;

        return (
          <Tab
            key={`${label}-${i}`}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            href={href}
            isSelected={isSelected}
            isHovered={isHovered}
            isVioletState={isViolet}
            onMouseEnter={() => {
              setHovered(i);
              const node = tabsRef.current[i];
              if (node) {
                const { width, height } = node.getBoundingClientRect();
                setPosition({
                  left: node.offsetLeft,
                  top: node.offsetTop,
                  width,
                  height,
                  opacity: 1,
                });
              }
            }}
            onClick={() => {
              setSelected(i);
              setHovered(i);
              if (onTabChange) onTabChange(tab, i);
            }}
          >
            {label}
          </Tab>
        );
      })}

      <Cursor position={position} isViolet={isViolet} violetColor={violetColor} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  onClick: () => void;
  onMouseEnter: () => void;
  href?: string;
  isSelected: boolean;
  isHovered: boolean;
  isVioletState: boolean;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  (
    {
      children,
      onClick,
      onMouseEnter,
      href,
      isSelected,
      isHovered,
      isVioletState,
    },
    ref
  ) => {
    // Encapsulación individual con proporciones equilibradas para caber cómodamente
    let containerStyle =
      "bg-white border border-neutral-200/90 text-[#333333] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-neutral-300";

    if (isSelected && isVioletState) {
      containerStyle = "bg-transparent border-transparent text-white font-bold";
    } else if (isHovered && !isVioletState) {
      containerStyle = "bg-transparent border-transparent text-[#171717] font-bold";
    } else if (isSelected) {
      containerStyle =
        "bg-white border border-[#D81B60]/40 text-[#D81B60] font-semibold";
    }

    const content = (
      <span className="relative z-10 block whitespace-nowrap px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 md:px-3.5 md:py-2 md:text-[0.88rem]">
        {children}
      </span>
    );

    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`relative z-10 cursor-pointer list-none select-none rounded-full transition-all duration-200 ${containerStyle}`}
      >
        {href ? (
          <a
            href={href}
            className="flex items-center text-inherit no-underline"
            onClick={(e) => {
              if (href.startsWith("#")) {
                const targetEl = document.querySelector(href);
                if (targetEl) {
                  e.preventDefault();
                  targetEl.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    );
  }
);

Tab.displayName = "Tab";

interface CursorProps {
  position: {
    left: number;
    top: number;
    width: number;
    height: number;
    opacity: number;
  };
  isViolet: boolean;
  violetColor?: string;
}

const Cursor: React.FC<CursorProps> = ({
  position,
  isViolet,
  violetColor = "#D81B60",
}) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        top: position.top,
        width: position.width,
        height: position.height,
        opacity: position.opacity,
        backgroundColor: isViolet ? violetColor : "#ffffff",
        boxShadow: isViolet
          ? "0 4px 14px 0 rgba(216, 27, 96, 0.40)"
          : "0 2px 8px 0 rgba(0, 0, 0, 0.10)",
        borderColor: isViolet ? violetColor : "#d4d4d8",
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 32,
        backgroundColor: { duration: 0.18 },
        boxShadow: { duration: 0.18 },
      }}
      className="absolute z-0 rounded-full border"
      style={{
        pointerEvents: "none",
      }}
    />
  );
};
