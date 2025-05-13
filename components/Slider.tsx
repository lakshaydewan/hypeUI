'use client";'
import {
  motion,
  MotionConfig,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function Slider({onChange, hideNumber}: {onChange: (value: string) => void, hideNumber?: boolean}) {
  const initialHeight = 4;
  const height = 12;
  const buffer = 12;
  const [ref, bounds] = useMeasure();
  const [hovered, setHovered] = useState(false);
  const [panning, setPanning] = useState(false);
  const progress = useMotionValue(0.5);
  const width = useTransform(progress, (v) => `${v * 100}%`);
  const roundedProgress = useTransform(
    progress,
    (v) => `${roundTo(v * 100, 0)}`
  );
  const [progressState, setProgressState] = useState(roundedProgress.get());
  const state = panning ? "panning" : hovered ? "hovered" : "idle";

  useEffect(() => {
    roundedProgress.onChange((v) => {
        onChange(v);    
        setProgressState(v)
    });
  }, [roundedProgress, onChange]);

  return (
    <MotionConfig transition={transition}>
        <div className="w-full h-full flex flex-col justify-center px-4">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex items-center justify-center w-full">
              <motion.div
                initial={false}
                animate={{
                  color:
                    hovered || panning
                      ? "rgb(255,255,255)"
                      : "rgb(120,113,108)",
                }}
                className="flex justify-start shrink-0 w-6"
              >
              </motion.div>
              {/* Slider */}
              <motion.div
                animate={state}
                onPanStart={() => setPanning(true)}
                onPanEnd={() => setPanning(false)}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onPan={(_, info) => {
                  const deltaInPercent = info.delta.x / bounds.width;
                  const newPercent = clamp(progress.get() + deltaInPercent, 0, 1);
                  progress.set(newPercent);
                }}
                style={{ height: height + buffer }}
                className="flex items-center justify-center relative touch-none grow-0"
                variants={{
                  idle: { width: "calc(95% - 48px)" },
                  hovered: { width: "calc(100% - 48px)" },
                  panning: { width: "calc(100% - 48px)" },
                }}
                initial={false}
                ref={ref}
              >
                <motion.div
                  initial={false}
                  variants={{
                    idle: { height: initialHeight },
                    hovered: { height },
                    panning: { height },
                  }}
                  className="relative rounded-full overflow-hidden w-full"
                >
                  <div className="h-full bg-white/20" />
                  <motion.div
                    style={{ width }}
                    className="bg-white absolute w-[20%] inset-0"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  color:
                    hovered || panning
                      ? "rgb(255,255,255)"
                      : "rgb(120,113,108)",
                }}
                className="flex justify-end shrink-0 w-6"
              >
              </motion.div>
            </div>
            {/* Label */}
            {
                hideNumber && <motion.div
              initial={false}
              animate={{
                color:
                  hovered || panning ? "rgb(255,255,255)" : "rgb(120,113,108)",
              }}
              className={`select-none mt-2 text-center text-sm font-semibold tabular-nums`}
            >
              {progressState}
            </motion.div>
            }
          </div>
        </div>
    </MotionConfig>
  );
}

const transition = { type: "spring", bounce: 0, duration: 0.3 };

const clamp = (num: number, min: number, max: number) =>
  Math.max(Math.min(num, max), min);

function roundTo(number: number, decimals: number): number {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}